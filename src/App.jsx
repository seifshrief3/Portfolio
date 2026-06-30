import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import Projects from './components/Projects'
import AIAutomation from './components/AIAutomation'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <AIAutomation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
