import { useGithubStats } from "../hooks/useGithubStats"
import { useStravaStats } from "../hooks/useStravaStats";

type Stat = {
    label: string
    value: string | number | null
}

export default function Stats () {
    const { commits } = useGithubStats();
    const { distance } = useStravaStats();

    const STATS: Stat[] = [
        { label: 'Kilometres Ridden', value: distance?.toLocaleString() ?? '—' },
        { label: 'Commits today', value: commits ?? '0 :(' },
        { label: 'Cups of coffee', value: '∞' },
    ]

    return (
        <section>
            <div className="grid grid-cols-1 overflow-hidden gap-5 sm:grid-cols-3">
                {STATS.map(({ label, value }) => (
                    <div
                        key={label}
                        className={`flex flex-col rounded-full items-center px-5 py-5 bg-background-dark`}>
                        <span className="text-3xl font-bold tabular-nums text-ink-cream">
                            {value}
                        </span>
                        <span className="text-sm font-medium text-ink-cream">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
