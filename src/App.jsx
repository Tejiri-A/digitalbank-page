import { Heading } from "./components/Heading.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <>
      <Heading />
      <main className={`min-h-[calc(100vh-64px)]`}>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
