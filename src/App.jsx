import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="about">
          <h1>About Me</h1>
          <p>
            Full Stack Developer passionate about creating modern web
            applications with clean code and great user experiences.
          </p>
          <About />
        </section>

        <Experiences />

        <section id="projects">
          <h1 className="title">Featured work</h1>
          <p className="description">
            Showcasing some of my projects and technical achievements
          </p>
          <Project />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
