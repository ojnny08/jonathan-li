import { Link, useParams } from 'react-router-dom'
import { CodeXml, AppWindow } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetail() {
    const { slug } = useParams()
    const project = getProjectBySlug(slug)

    if (!project) {
        return (
            <>
                <h1 className="text-2xl pb-4">Project not found</h1>
                <Link to="/projects">← Back to projects</Link>
            </>
        )
    }

    const { name, code, link, details, stack, whyStack, sections, highlights } = project

    return (
        <>
            <div className="flex items-center gap-3 pb-4">
                <h1 className="text-2xl">{name}</h1>
                <div className="flex gap-2">
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Visit website">
                            <AppWindow size={18} />
                        </a>
                    )}
                    {code && (
                        <a href={code} target="_blank" rel="noopener noreferrer" aria-label="View code">
                            <CodeXml size={18} />
                        </a>
                    )}
                </div>
            </div>

            <p>{details}</p>

            <div className="flex flex-wrap gap-2 pt-4">
                {stack.map((tech) => (
                    <div
                        key={tech}
                        className="text-ink-cream font-semibold text-xs border border-border bg-background-dark rounded-2xl px-2">
                        {tech}
                    </div>
                ))}
            </div>

            <h2 className="text-lg font-bold pt-6">Why this stack</h2>
            <p className="mt-1">{whyStack}</p>

            {sections.map(({ heading, body }) => (
                <div key={heading}>
                    <h2 className="text-lg font-bold pt-6">{heading}</h2>
                    <p className="mt-1">{body}</p>
                </div>
            ))}

            <h2 className="text-lg font-bold pt-6">Key things I did</h2>
            <ul className="mt-1 list-disc pl-5">
                {highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <div className="pt-6">
                <Link to="/projects">← Back to projects</Link>
            </div>
        </>
    )
}
