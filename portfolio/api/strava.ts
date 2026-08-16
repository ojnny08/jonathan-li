import type { VercelRequest, VercelResponse } from '@vercel/node'
// .js extension is the nodenext ESM convention; TS resolves it to strava.ts


type StravaToken = {
    access_token: string
    refresh_token: string
    expires_at: number
}

type StravaAthlete = {
    bikes: { distance: number, name: string}[]
}



async function getAccessToken(): Promise<string> {
    const res = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            client_id: process.env.STRAVA_CLIENT_ID,
            client_secret: process.env.STRAVA_CLIENT_SECRET,
            refresh_token: process.env.STRAVA_REFRESH_TOKEN,
            grant_type: 'refresh_token',
        }),
    })

    if (!res.ok) throw new Error(`Strava token ${res.status}: ${await res.text()}`)

    const token = (await res.json()) as StravaToken
    return token.access_token
}

async function stravaGet<T>(path: string, accessToken: string): Promise<T> {
    const res = await fetch(`https://www.strava.com/api/v3${path}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (!res.ok) throw new Error(`Strava ${path} ${res.status}`)

    return res.json() as Promise<T>
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
    try {
        const accessToken = await getAccessToken()
        const athlete = await stravaGet<StravaAthlete>('/athlete', accessToken)
        const meters = athlete.bikes.reduce((sum, bike) => sum + bike.distance, 0)

        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
        res.status(200).json({ km: Math.round(meters / 1000) })

    } catch (err) {
        console.error(err)
        res.status(502).json({ error: 'Failed to load Strava stats' })
    }
}
