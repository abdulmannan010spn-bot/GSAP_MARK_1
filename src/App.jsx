import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Cocktails from "./Components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
    </main>
  );
};
export default App;
