import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Right() {
  return (
    <div className="lg:flex lg:flex-col lg:w-1/2 lg:p-4 lg:pr-16 gap-16">
        <About />
        <Experience />
        <Projects />
    </div>
  )
}
