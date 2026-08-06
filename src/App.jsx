import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Cocktails from "./Components/Watches";
import About from "./Components/About";
import Art from "./Components/Art";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};
export default App;
