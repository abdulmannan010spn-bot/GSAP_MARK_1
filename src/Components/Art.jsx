import { featureLists, qualityLists } from "../Constants";
import { CircleCheck } from "lucide-react";
import watch6 from "../assets/watch6.png";
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
    <div id="art" className="lg:p-15">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
      </div>
      <div className="content lg:gap-220">
        <ul className="space-y-4 will-fade relative z-10">
          {qualityLists.map((features, index) => (
            <li key={index} className="flex items-center gap-2">
              <CircleCheck />
              <p className="whitespace-nowrap">{features}</p>
            </li>
          ))}
        </ul>

        <div className="Watch-img ">
          <img
            src={watch6}
            alt="Watch"
            className="masked-img abs-center w-full h-full object-cover"
          />
        </div>

        <ul className="space-y-4 will-fade relative z-10">
          {featureLists.map((features, index) => (
            <li key={index} className="flex items-center justify-start gap-2">
              <CircleCheck />
              <p className="md:w-fit w-60 whitespace-nowrap">{features}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="masked-container ">
        <h2 className="font-[Jura] md:relative md:top-15 lg:relative lg:top-22">Beyond Time</h2>

        <div id="masked-content" className="md:relative md:top-5" >
          <h3 className="font-[Jura] text-4xl">Where Precision Meets Elegance</h3>
          <p className="font-[Jura] lg:text-2xl">
            Discover watches that combine timeless craftsmanship with
            contemporary design,<br /> delivering exceptional style, comfort, and
            performance for every occasion.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Art;
