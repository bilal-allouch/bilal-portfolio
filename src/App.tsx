import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <MainLayout>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </MainLayout>
  );
}
