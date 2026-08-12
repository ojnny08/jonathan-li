import About from '../components/About'
import NavBar from '../components/NavBar'
import Stats from '../components/Stats'

export const Home = () => {
  return (
    <div id="top" className="min-h-dvh">
        <NavBar />
        <main>
            <About />
            <Stats />
        </main>
    </div>
  )
}

export default Home
