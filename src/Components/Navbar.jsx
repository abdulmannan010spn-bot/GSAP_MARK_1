import { navLinks } from "../../Constants";
import sonata from "./../assets/sonata.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const navtween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navtween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        background: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power2.inOut",
      },
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2 ">
          <img className="h-24 mt-3 " src={sonata} alt="sonata" />
        </a>
        <ul>
          {navLinks.map((links) => (
            <li key={links.id}>
              <a className="lg:text-lg font-[Jura] navpro14" href={`#${links.id}`}>{links.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
