type Projects = {
    name: string
    code: string
    link: string
    details: string
    stack: Array<string>
}
const PROJECTS: Projects[] = [
    {name: "Bikco", code: "", link: "https://github.com/ojnny08/Nook", details: "A visual bike builder for fixed gear bikes. You pick components from a large catalogue with compatibility warnings, total weight, and price recalculated on every change.", stack: ['React', 'Django', 'Three.js', 'AWS S3', 'PostgreSQL']},
    {name: "Nook", code: "", link: "", details: "Turns a flat 2-D floor plan into a coloured 3-D render you can actually picture living in. Upload a plan and it reads the walls and rooms, then rebuilds them with height and materials so the space reads like a room instead of a diagram.", stack: ['React', 'Puter.js']},
    {name: "Strava-Stats", code: "", link: "", details: "A personal running dashboard built on Strava's API. Pulls my activity history into Postgres and computes the stats Strava doesn't surface — long-term mileage trends, pace progression, and week-over-week training load.", stack: ['React', 'FastAPI', 'AWS S3', 'PostgreSQL']},
]
export default function Projects() {
    return (
        <section id="projects">
            <div className="text-2xl text-ink-strong pb-4">Projects</div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {PROJECTS.map(({name, details, stack} ) => (
                        <div
                            key={name}
                            className="flex flex-col rounded-xl border border-cream bg-background p-5">
                            <h3 className="text-lg font-bold text-ink-dark">{name}</h3>
                            <p className="mt-1 text-sm">{details}</p>
                            <div className="mt-auto flex flex-wrap gap-2 pt-2" >
                                {stack.map((tech) => (
                                <div
                                    key={tech}
                                    className="text-ink-cream font-semibold text-xs border border-border bg-background-dark rounded-2xl px-2">
                                    {tech}
                                </div>
                            ))}
                            </div>
                        </div>
                ))}
                </div>
        </section>
    )
}