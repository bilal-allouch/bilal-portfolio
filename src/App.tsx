import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";



import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <MainLayout>
      <Header />

      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </MainLayout>
  );
}

