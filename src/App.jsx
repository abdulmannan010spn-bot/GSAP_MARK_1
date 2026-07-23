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
      <div className='h-dvh bg-[#0A0C0C]'></div>
    </main>
  )
}
export default App