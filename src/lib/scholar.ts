import fs from 'node:fs';
import path from 'node:path';

export interface ScholarData {
  citations: number;
  hIndex: number;
  paperCitations: Record<string, number>;
}

const CACHE_FILE_PATH = path.resolve(process.cwd(), 'src/data/scholar-cache.json');

function loadPersistedCache(): ScholarData | null {
  try {
    if (fs.existsSync(CACHE_FILE_PATH)) {
      const raw = fs.readFileSync(CACHE_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(raw) as Partial<ScholarData>;
      if (typeof parsed.citations === 'number' && typeof parsed.hIndex === 'number') {
        return {
          citations: parsed.citations,
          hIndex: parsed.hIndex,
          paperCitations: parsed.paperCitations ?? {},
        };
      }
    }
  } catch {
    // Ignore malformed or inaccessible cache file
  }
  return null;
}

function savePersistedCache(data: ScholarData): void {
  try {
    const serialized = `${JSON.stringify(data, null, 2)}\n`;
    if (fs.existsSync(CACHE_FILE_PATH)) {
      const existing = fs.readFileSync(CACHE_FILE_PATH, 'utf-8');
      if (existing === serialized) {
        return;
      }
    }
    fs.mkdirSync(path.dirname(CACHE_FILE_PATH), { recursive: true });
    fs.writeFileSync(CACHE_FILE_PATH, serialized, 'utf-8');
  } catch {
    // Ignore read-only filesystem errors (e.g. serverless runtime)
  }
}

const persistedDefaults = loadPersistedCache();

export const scholarConfig = {
  userId: '4XKCFF4AAAAJ',
  citations: persistedDefaults?.citations ?? 0,
  hIndex: persistedDefaults?.hIndex ?? 0,
  scholarUrl: 'https://scholar.google.com/citations?user=4XKCFF4AAAAJ',
};

function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

let cachedScholar: { data: ScholarData; expiresAt: number } | null = null;
const CACHE_TTL_MS = 10 * 60 * 1000;

/**
 * Attempts to fetch live citation metrics from Google Scholar at build/dev time
 * with a short timeout and in-memory cache, falling back to persisted local cache
 * or static values if blocked or offline.
 */
export async function fetchScholarMetrics(
  userId: string,
  fallback: { citations: number; hIndex: number },
  papers: Array<{ title: string; citations?: number }>
): Promise<ScholarData> {
  if (cachedScholar && Date.now() < cachedScholar.expiresAt) {
    return cachedScholar.data;
  }

  const fileCache = loadPersistedCache();

  const result: ScholarData = {
    citations: fileCache?.citations ?? fallback.citations,
    hIndex: fileCache?.hIndex ?? fallback.hIndex,
    paperCitations: { ...(fileCache?.paperCitations ?? {}) },
  };

  for (const p of papers) {
    if (typeof p.citations === 'number') {
      result.paperCitations[normalizeTitle(p.title)] = p.citations;
    }
  }

  if (!userId) return result;

  try {
    const res = await fetch(
      `https://scholar.google.com/citations?user=${encodeURIComponent(userId)}&hl=en`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        signal: AbortSignal.timeout(4000),
      }
    );

    if (!res.ok) return result;
    const html = await res.text();

    let updatedLive = false;

    // Parse total citations and h-index from gsc_rsb_std cells
    const statsMatches = [...html.matchAll(/<td class="gsc_rsb_std">(\d+)<\/td>/g)].map((m) =>
      Number(m[1])
    );
    if (statsMatches.length >= 3) {
      result.citations = statsMatches[0];
      result.hIndex = statsMatches[2];
      updatedLive = true;
    }

    // Parse per-paper citations from gsc_a_tr rows
    const rowRegex =
      /<tr class="gsc_a_tr">[\s\S]*?<a[^>]*class="gsc_a_at"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<a[^>]*class="gsc_a_ac[^"]*"[^>]*>(\d*)<\/a>/g;
    for (const match of html.matchAll(rowRegex)) {
      const rawTitle = match[1].replace(/<[^>]+>/g, '').trim();
      const count = match[2] ? Number(match[2]) : 0;
      if (rawTitle) {
        result.paperCitations[normalizeTitle(rawTitle)] = count;
        updatedLive = true;
      }
    }

    if (updatedLive) {
      savePersistedCache({
        citations: result.citations,
        hIndex: result.hIndex,
        paperCitations: result.paperCitations,
      });
    }
  } catch {
    // Graceful fallback to persisted cache / static values when Google Scholar blocks or times out
  }

  cachedScholar = { data: result, expiresAt: Date.now() + CACHE_TTL_MS };
  return result;
}

export function getPaperCitations(
  paper: { title: string; citations?: number },
  scholarData: ScholarData
): number | undefined {
  const key = normalizeTitle(paper.title);
  if (key in scholarData.paperCitations) {
    return scholarData.paperCitations[key];
  }
  return paper.citations;
}
