import profile from '../assets/me.png'

const ABOUT_ME = {
    name: 'Jonathan Li',
    body: "Hi, I'm Jonathan! A Computer Engineering student at Toronto Metropolitan University focused on software development and data engineering. I enjoy taking messy datasets and building reliable ETL pipelines, automated workflows, and shipping software. I do my best to build software that solves real-world problems and makes people's lives easier.",
    skills: ['TypeScript', 'React', 'Python', 'SQL', 'ETL'],
}

function About() {
    return (
        <section>
            <div className="flex items-center px-60 pt-12">
                <div className='flex items-center gap-4'>
                    <img src={profile} alt="Jonathan Li" className='size-80 rounded-full'></img>
                    <div className="flex flex-col gap-4">
                        <h1 className='text-3xl font-bold'>{ABOUT_ME.name}</h1>
                        <p className='text-xl'>{ABOUT_ME.body}</p>
                        <div className='flex flex-wrap gap-2'>
                            {ABOUT_ME.skills.map((skill) => (
                            <span key={skill} className='bg-surface border-border rounded-full px-2'>
                                {skill}
                            </span>
                        ))}
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>
    )
}
export default About;