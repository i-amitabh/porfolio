import About from "./components/About";
import Clients from "./components/Clients";
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
      <Clients />
    </main>
  )
}

export default App;