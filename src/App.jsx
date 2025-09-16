import { Heading } from "./components/Heading.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import LatestArticles from "./components/LatestArticles.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Heading />
      <main className={`min-h-[calc(100vh-64px)]`}>
        <Hero />
        <About />
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}

export default App;
