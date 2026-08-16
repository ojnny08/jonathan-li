import { useEffect, useState } from "react";
import { fetchStravaDistance} from "../lib/strava";

export function useStravaStats() {
    const [distance, setDistance] = useState<number | null>(null);
    useEffect(() => {
        fetchStravaDistance()
            .then(setDistance)
            .catch(() => setDistance(null));
    },[])

    return { distance };
}
