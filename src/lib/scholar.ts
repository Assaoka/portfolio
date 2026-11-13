export const scholarConfig = {
  userId: '4XKCFF4AAAAJ',
  citations: 0,
  hIndex: 0,
  scholarUrl: 'https://scholar.google.com/citations?user=4XKCFF4AAAAJ',
};

export interface ScholarData {
  citations: number;
  hIndex: number;
  paperCitations: Record<string, number>;
}

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
 * with a short timeout and in-memory cache, falling back to static values if blocked or offline.
 */
export async function fetchScholarMetrics(
  userId: string,
  fallback: { citations: number; hIndex: number },
  papers: Array<{ title: string; citations?: number }>
): Promise<ScholarData> {
  if (cachedScholar && Date.now() < cachedScholar.expiresAt) {
    return cachedScholar.data;
  }

  const result: ScholarData = {
    citations: fallback.citations,
    hIndex: fallback.hIndex,
    paperCitations: {},
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

    // Parse total citations and h-index from gsc_rsb_std cells
    const statsMatches = [...html.matchAll(/<td class="gsc_rsb_std">(\d+)<\/td>/g)].map((m) =>
      Number(m[1])
    );
    if (statsMatches.length >= 3) {
      result.citations = statsMatches[0];
      result.hIndex = statsMatches[2];
    }

    // Parse per-paper citations from gsc_a_tr rows
    const rowRegex = /<tr class="gsc_a_tr">[\s\S]*?<a[^>]*class="gsc_a_at"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<a[^>]*class="gsc_a_ac[^"]*"[^>]*>(\d*)<\/a>/g;
    for (const match of html.matchAll(rowRegex)) {
      const rawTitle = match[1].replace(/<[^>]+>/g, '').trim();
      const count = match[2] ? Number(match[2]) : 0;
      if (rawTitle) {
        result.paperCitations[normalizeTitle(rawTitle)] = count;
      }
    }
  } catch {
    // Graceful fallback to static values when Google Scholar blocks or times out
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
