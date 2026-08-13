import About from '../components/About'
import Experience from '../components/Experience'
import NavBar from '../components/NavBar'
import Stats from '../components/Stats'

export const Home = () => {
  return (
    <div id="top" className="min-h-dvh">
        <NavBar />
        <main className='shell'>
            <About />
            <Stats />
            <Experience />
        </main>
    </div>
  )
}

export default Home
