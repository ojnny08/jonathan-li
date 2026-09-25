import { Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
    )
}

export default App
