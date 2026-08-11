
import NavBar from '../components/NavBar'

const ABOUT_ME = {
    name: 'Jonathan Li',
    body: "Hi, I'm Jonathan! A Computer Engineering student at Toronto Metropolitan University focused on software development and data engineering. I enjoy taking messy datasets and building reliable ETL pipelines, automated workflows, and shipping software. I do my best to build software that solves real-world problems and makes people's lives easier.",
    skills: ['TypeScript', 'React', 'Python', 'SQL', 'ETL'],
}

export const Home = () => {
  return (
    <div className="home">
        <NavBar />
        <div className="about">
            <div className="about">
                <section className="meta">
                    <h1>{ABOUT_ME.name}</h1>
                    <p>{ABOUT_ME.body}</p>
                    <ul className="skills">
                        {ABOUT_ME.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
        
    </div>
  )
}

export default Home
