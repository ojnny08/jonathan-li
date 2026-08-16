/**
 * One-time exchange of an OAuth code for a refresh token.
 * Get the code from the redirect URL after approving the authorize link, then:
 *
 *   node --env-file=.env scripts/strava-auth.mjs <code>
 *
 * Codes expire within minutes, so run this right after authorizing.
 */

const code = process.argv[2]

if (!code) {
    console.error('Usage: node --env-file=.env scripts/strava-auth.mjs <code>')
    process.exit(1)
}

const res = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
    }),
})

if (!res.ok) {
    console.error(`\nHTTP ${res.status}: ${await res.text()}`)
    console.error('\nA 400 usually means the code expired or was already used.')
    console.error('Re-open the authorize link to get a fresh one.\n')
    process.exit(1)
}

const token = await res.json()

console.log('\nAuthorized as', `${token.athlete?.firstname} ${token.athlete?.lastname}`)
console.log('\nPut this in .env:\n')
console.log(`STRAVA_REFRESH_TOKEN=${token.refresh_token}\n`)
