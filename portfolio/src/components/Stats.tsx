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
        <section className="shell pb-16 sm:pb-24">
            <div className="grid grid-cols-1 overflow-hidden rounded-2xl sm:grid-cols-3">
                {STATS.map(({ label, value }, index) => (
                    <div
                        key={label}
                        className={`flex flex-col items-center gap-1 px-6 py-10 ${
                            index % 2 === 0 ? 'bg-blue' : 'bg-blue-light'
                        }`}>
                        <span className="text-4xl font-bold tabular-nums text-ink-strong">
                            {value}
                        </span>
                        <span className="text-sm font-medium text-ink">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
