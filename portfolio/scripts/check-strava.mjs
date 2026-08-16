/**
 * Diagnostic for the Strava credentials in .env — checks each step of what
 * api/strava.ts does, and reports where it breaks.
 *
 *   node --env-file=.env scripts/check-strava.mjs
 */

// Accepts the VITE_-prefixed names too, so it works before .env is renamed
const env = name => process.env[name] ?? process.env[`VITE_${name}`]

const CLIENT_ID = env('STRAVA_CLIENT_ID')
const CLIENT_SECRET = env('STRAVA_CLIENT_SECRET')
const REFRESH_TOKEN = env('STRAVA_REFRESH_TOKEN')

const pass = msg => console.log(`  ok    ${msg}`)
const fail = msg => console.log(`  FAIL  ${msg}`)

console.log('\n1. Environment variables')

const missing = []
for (const [name, value] of Object.entries({
    STRAVA_CLIENT_ID: CLIENT_ID,
    STRAVA_CLIENT_SECRET: CLIENT_SECRET,
    STRAVA_REFRESH_TOKEN: REFRESH_TOKEN,
})) {
    if (!value) {
        fail(`${name} is missing`)
        missing.push(name)
    } else if (process.env[name]) {
        pass(`${name} set (${value.length} chars)`)
    } else {
        // Present but only under the VITE_ prefix, which the function won't read
        fail(`${name} only exists as VITE_${name} — the function reads ${name}`)
        missing.push(name)
    }
}

if (missing.length) {
    console.log('\nFix .env before continuing. Exiting.\n')
    process.exit(1)
}

console.log('\n2. Token exchange (grant_type=refresh_token)')

const tokenRes = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        grant_type: 'refresh_token',
    }),
})

if (!tokenRes.ok) {
    fail(`HTTP ${tokenRes.status}`)
    console.log(`  ${await tokenRes.text()}`)
    console.log(
        '\nA 400 here usually means STRAVA_REFRESH_TOKEN holds the OAuth "code"\n' +
        'rather than a refresh token. Exchange the code once with\n' +
        'grant_type=authorization_code to get one.\n'
    )
    process.exit(1)
}

const token = await tokenRes.json()
pass(`got access_token, expires ${new Date(token.expires_at * 1000).toLocaleString()}`)

if (token.refresh_token !== REFRESH_TOKEN) {
    fail('Strava rotated the refresh token — update .env with the new value:')
    console.log(`  ${token.refresh_token}`)
}

console.log('\n3. GET /athlete')

const athleteRes = await fetch('https://www.strava.com/api/v3/athlete', {
    headers: { Authorization: `Bearer ${token.access_token}` },
})

if (!athleteRes.ok) {
    fail(`HTTP ${athleteRes.status}`)
    console.log(`  ${await athleteRes.text()}`)
    process.exit(1)
}

const athlete = await athleteRes.json()
pass(`${athlete.firstname} ${athlete.lastname} (id ${athlete.id})`)

console.log('\n4. Bike distance')

if (!athlete.bikes?.length) {
    fail('no bikes on the profile — the reduce would return 0')
    console.log('  Check the token scope includes profile:read_all.')
    process.exit(1)
}

for (const bike of athlete.bikes) {
    pass(`${bike.name}: ${Math.round(bike.distance / 1000)} km${bike.retired ? ' (retired)' : ''}`)
}

const meters = athlete.bikes.reduce((sum, bike) => sum + bike.distance, 0)
console.log(`\n  /api/strava would return: ${JSON.stringify({ km: Math.round(meters / 1000) })}\n`)
