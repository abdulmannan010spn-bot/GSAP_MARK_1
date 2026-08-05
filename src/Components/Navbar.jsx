import { navLinks } from "../Constants";
import sonata from "../assets/sonata.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Menu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(10px)",
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top -40",
          
        },
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 lg:pt-6 "
    >
      <div className="max-w-9xl mx-auto h-20 flex items-center justify-center px-6 lg:px-10 ">
      <div className="flex flex-row justify-between items-center lg:pt-6 ">
       
          <img
            src={sonata} 
            alt="Sonata"
            className="h-16 lg:h-20 w-auto object-contain"
          /><Menu className="lg:hidden md:hidden " />
        
</div>

        <ul className="hidden md:flex items-center gap-8 ">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-[Jura] text-white text-lg uppercase tracking-wide transition-all duration-300 hover:text-gray-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>



      </div>
    </nav>
  );
};

export default Navbar;