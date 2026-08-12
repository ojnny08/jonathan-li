const USERNAME = 'ojnny08'

type CommitSearchResult = {
    total_count: number
}

/** Local midnight today as an ISO timestamp with timezone offset, e.g. 2026-08-11T00:00:00-04:00 */
function startOfToday(): string {
    const now = new Date()
    const pad = (n: number) => String(n).padStart(2, '0')

    const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`

    // getTimezoneOffset() is minutes to ADD to local time to reach UTC, so the sign flips
    const offset = now.getTimezoneOffset()
    const sign = offset <= 0 ? '+' : '-'
    const offsetHours = pad(Math.floor(Math.abs(offset) / 60))
    const offsetMinutes = pad(Math.abs(offset) % 60)

    return `${date}T00:00:00${sign}${offsetHours}:${offsetMinutes}`
}

export async function fetchCommitsToday(): Promise<number> {
    const query = `author:${USERNAME} committer-date:>=${startOfToday()}`

    const res = await fetch(
        `https://api.github.com/search/commits?q=${encodeURIComponent(query)}&per_page=1`,
        { headers: { Accept: 'application/vnd.github+json' } })

    if (!res.ok) throw new Error(`GitHub API ${res.status}`)

    const data: CommitSearchResult = await res.json()
    return data.total_count
}
