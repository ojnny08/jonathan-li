type StravaDistance = {
    km: number
}

export const fetchStravaDistance = async (): Promise<number> => {
    const res = await fetch('/api/strava');

    if (!res.ok) throw new Error(`strava api: ${res.status}`);

    const data: StravaDistance = await res.json();
    return data.km;
}
