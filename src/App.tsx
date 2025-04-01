import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App;