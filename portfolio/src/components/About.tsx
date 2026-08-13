import profile from '../assets/me.png'

const ABOUT_ME = {
    name: 'Jonathan Li',
    role: 'Computer Engineering @ Toronto Metropolitan University',
    body: "A Computer Engineering student at Toronto Metropolitan University focused on software development and data engineering. I enjoy taking messy datasets and building reliable ETL pipelines, automated workflows, and shipping software. I do my best to build software that solves real-world problems and makes people's lives easier.",
    skills: ['TypeScript', 'React', 'Python', 'SQL', 'ETL'],
}

function About() {
    return (
        <section id="about" className="my-20">
            <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:gap-14 md:text-left">
                <img
                    src={profile}
                    alt="Jonathan Li"
                    width={256}
                    height={256}
                    className="size-50 rounded-full object-cover sm:size-56 md:size-64"
                />

                <div className="flex flex-col gap-5">
                    <div className="gap-2">
                        <h1 className="text-4xl font-bold text-ink-strong">
                            Hello, I'm {ABOUT_ME.name}
                        </h1>
                    </div>

                    <p className="max-w-prose text-base text-lg">
                        {ABOUT_ME.body}
                    </p>

                    <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
                        {ABOUT_ME.skills.map((skill) => (
                            <li
                                key={skill}
                                className="rounded-full border border-border bg-surface px-3 text-sm font-medium text-ink"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;
