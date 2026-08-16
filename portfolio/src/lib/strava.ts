export const fetchStravaDistance = async () => {
    const res = await fetch('/api/strava/');

    if (!res.ok) throw new Error(`strava api: ${res.status}`);

    return res.json();
}