import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

export default function Projects() {
    return (
        <section id="projects">
            <div className="text-2xl pb-4">Projects</div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {PROJECTS.map(({slug, name, details, stack} ) => (
                        <Link
                            key={slug}
                            to={`/projects/${slug}`}
                            className="flex flex-col rounded-xl border border-cream bg-background p-5">
                            <h3 className="text-lg font-bold">{name}</h3>
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
                        </Link>
                ))}
                </div>
        </section>
    )
}
