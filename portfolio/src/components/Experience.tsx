const JOBS = {
    company: 'Gardiner Roberts LLP',
    location: 'Toronto, ON',
    position: 'Frontend Developer',
    date: '2026',
    body: 'Developed a client-side file conversion tool for Gardiner Roberts LLP accountants using React and lucide-react, implementing parsing logic to transform .txt input into properly delimited .csv output. Handled the full workflow of file upload, data parsing, delimiter formatting, and download.',
}

export default function Experience() {
    return (
        <section id="experience">
            <h2 className="text-2xl text-ink-strong">
                Work Experience
            </h2>

            <div className="mt-3 flex flex-col gap-5 md:flex-row md:gap-10">
                <div className="md:w-80 md:shrink-0">
                    <h3 className="text-lg text-ink-strong">{JOBS.company}</h3>
                    <p className="italic text-ink">{JOBS.position}</p>
                    <p className="text-xs italic text-ink">{JOBS.date}</p>
                </div>

                <p className="text-ink md:flex-1">{JOBS.body}</p>
            </div>
        </section>
    )
}
