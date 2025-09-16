import { Heading } from "./components/Heading.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Heading />
      <main className={`min-h-[calc(100vh-64px)]`}>
        <Hero />
      </main>
    </>
  );
}

export default App;
