import { useEffect, useState } from "react";
import { fetchCommitsToday } from "../lib/github";

export function useGithubStats() {
    const [commits, setCommits] = useState<number | null>(null);
    useEffect(() => {
        fetchCommitsToday()
            .then(setCommits)
            .catch(() => setCommits(null));
    },[])

    return { commits };
}