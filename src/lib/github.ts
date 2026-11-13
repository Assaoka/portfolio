export const githubConfig = {
  username: 'Assaoka',
  profileUrl: 'https://github.com/Assaoka',
  fallbackRepos: 0,
  fallbackStars: 0,
};

export interface GitHubMetrics {
  publicRepos: number;
  totalStars: number;
  repoStars: Record<string, number>;
}

let cachedGitHub: { data: GitHubMetrics; expiresAt: number } | null = null;
const CACHE_TTL_MS = 10 * 60 * 1000;

/**
 * Fetches public repository count and total stars from GitHub REST API
 * with a short timeout, in-memory cache, and graceful fallback.
 */
export async function fetchGitHubMetrics(
  username: string,
  fallback: GitHubMetrics
): Promise<GitHubMetrics> {
  if (cachedGitHub && Date.now() < cachedGitHub.expiresAt) {
    return cachedGitHub.data;
  }

  const result: GitHubMetrics = { ...fallback, repoStars: {} };
  if (!username) return result;

  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'assaoka-portfolio',
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
        headers,
        signal: AbortSignal.timeout(4000),
      }),
      fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&type=owner`,
        {
          headers,
          signal: AbortSignal.timeout(4000),
        }
      ),
    ]);

    if (userRes.ok) {
      const userData = (await userRes.json()) as { public_repos?: number };
      if (typeof userData.public_repos === 'number') {
        result.publicRepos = userData.public_repos;
      }
    }

    if (reposRes.ok) {
      const reposData = (await reposRes.json()) as Array<{
        name?: string;
        stargazers_count?: number;
      }>;
      if (Array.isArray(reposData)) {
        result.totalStars = reposData.reduce(
          (sum, repo) => sum + (repo.stargazers_count ?? 0),
          0
        );
        for (const repo of reposData) {
          if (repo.name && typeof repo.stargazers_count === 'number') {
            result.repoStars[repo.name.toLowerCase()] = repo.stargazers_count;
          }
        }
      }
    }
  } catch {
    // Graceful fallback when rate-limited or offline
  }

  cachedGitHub = { data: result, expiresAt: Date.now() + CACHE_TTL_MS };
  return result;
}

export function getProjectStars(
  urls: Record<string, string> | undefined,
  repoStars: Record<string, number>
): number {
  if (!urls) return 0;
  let total = 0;
  for (const href of Object.values(urls)) {
    const match = href.match(/github\.com\/[^/]+\/([^/?#]+)/i);
    if (match) {
      total += repoStars[match[1].toLowerCase()] ?? 0;
    }
  }
  return total;
}
