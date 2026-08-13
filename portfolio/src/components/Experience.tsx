const JOBS = {
    company: 'Gardiner Roberts LLP',
    location: 'Toronto, ON',
    position: 'Frontend Developer',
    date: '2026',
    body: 'Developed a file converter from .csv to .txt in a specific format, increasing work efficiency',
}

export default function Experience() {
    return (
        <section id="experience" className="my-10">
            <h2 className="text-2xl font-bold text-ink-strong">
                Work Experience
            </h2>

            <div className="mt-3">
                <div className="flex items-baseline justify-between gap-6">
                    <h3 className="text-lg font-bold text-ink-strong">{JOBS.company}</h3>
                    <span className="text-sm text-ink">{JOBS.location}</span>
                </div>

                <div className="flex items-baseline justify-between gap-6">
                    <p className="italic text-ink">{JOBS.position}</p>
                    <span className="text-sm italic text-ink">{JOBS.date}</span>
                </div>

                <p className="mt-2 text-ink"> - {JOBS.body}</p>
            </div>
        </section>
    )
}
