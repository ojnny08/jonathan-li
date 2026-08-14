import { useGithubStats } from "../hooks/useGithubStats"

type Stat = {
    label: string
    value: string | number
}

export default function Stats () {
    const { commits } = useGithubStats();

    const STATS: Stat[] = [
        { label: 'Kilometres run', value: '1,200' },
        { label: 'Commits today', value: commits ?? '—' },
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
