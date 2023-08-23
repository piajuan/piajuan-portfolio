import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"

function App() {

  return (
    <div className="dark">
      <div className="dark:bg-dark-300 min-h-screen">
        <Header />
        <Hero />
        <FeaturedProjects />
      </div>
    </div>
  )
}

export default App
