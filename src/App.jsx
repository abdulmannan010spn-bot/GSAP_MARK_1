import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  )
}
export default App