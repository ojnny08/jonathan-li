import { Link } from 'react-router-dom'

export const SECTIONS = [
  { section: 'About', path: '/about' },
  { section: 'Work', path: '/work' },
  { section: 'Projects', path: '/projects' },
]

export const Home = () => {
  return (
    <div className="text-4xl">
      {SECTIONS.map(({ section, path }) => (
        <h2 key={path} className="text-xl pb-4">
          <Link to={path}>{section}</Link>
        </h2>
      ))}
    </div>
  )
}

export default Home
