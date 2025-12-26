import MainLayout from "./layouts/MainLayout";
import Header from "./components/Header";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <MainLayout>
      <Header />
      <Hero />
    </MainLayout>
  );
}
