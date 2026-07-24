import { featureLists, goodLists } from "../../Constants";
import { CircleCheck } from "lucide-react";
import p from "../assets/p.png";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start1 = isMobile ? "top 20%" : "top top";
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start1,
        scrub: 1.5,
        pin: true,
      },
    });
    t4.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    });

    t4.fromTo(
      ".masked-img",
      { maskSize: "50%", scale: 1 },
      {
        maskSize: "400%",
        scale: 1.2,
        duration: 1,
        ease: "power1.inOut",
      },
    );
    t4.to(".masked-container h2", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    });

    t4.to("#masked-content", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  });
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
      </div>
      <div className="content gap-250">
        <ul className="space-y-4 will-fade relative z-10">
          {goodLists.map((features, index) => (
            <li key={index} className="flex items-center gap-2">
              <CircleCheck />
              <p>{features}</p>
            </li>
          ))}
        </ul>

        <div className="cocktail-img">
          <img
            src={p}
            alt="cocktail"
            className="masked-img abs-center w-full h-full object-cover"
          />
        </div>

        <ul className="space-y-4 will-fade relative z-10">
          {featureLists.map((features, index) => (
            <li key={index} className="flex items-center justify-start gap-2">
              <CircleCheck />
              <p className="md:w-fit w-60">{features}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="masked-container">
        <h2>Sip worthy perfection</h2>
        <div id="masked-content">
          <h3>Made with Craft , Poured with passion</h3>
          <p>
            This isn’t just a drink. It’s a carefully crafted moment made just
            for you.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Art;
