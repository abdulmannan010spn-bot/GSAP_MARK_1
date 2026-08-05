import gsap from "gsap";
import videowatchoutput from "../assets/videowatchoutput.mp4";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function HeroSection() {
  const videoref = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const splitTexth1 = new SplitText(".title", { type: "chars ,words" });
    const splitTextp = new SplitText(".subtitle", { type: "lines" });
    splitTexth1.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(splitTexth1.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(splitTextp.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const StartVal = isMobile ? "top 60%" : "center 60%";
    const EndVal = isMobile ? "top 120%" : "bottom top";
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: videoref.current,
        start: StartVal,
        end: EndVal,
        scrub: true,
        pin: true,
      },
    });
    videoref.current.onloadedmetadata = () => {
      t1.to(videoref.current, {
        currentTime: videoref.current.duration,
        ease: "none",
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title font-[Noto_Serif_Display] uppercase text-white font-light whitespace-nowrap text-[9vh] lg:text-[34vh] md:text-[14vh] relative top-5">
          premium
        </h1>

        <div className="body">
          <div className="content relative left-10 top-10">
            <div className="mr-7 space-y-4 hidden md:block font-[Jura]">
              <p className="text-lg italic ">Crafted for Every Moment</p>
              <p className="subtitle font-[Jura] italic">
                Wear Time
                <br />
                With Confidence
              </p>
            </div>
            <div className="view-Watch mr-25 ">
              <p className="subtitle font-[Jura] lg:w-[20vw] italic text-center ml-2">
                Discover the world of Sonata, where precision meets elegance.
                Designed for those who value style and reliability, every
                timepiece reflects exceptional craftsmanship. <br />
              </p>
              <a className="italic text-center relative left-4/13 hidden lg:visible md:visible" href="#Watch">View Collections</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video">
        <video
          className="video"
          ref={videoref}
          src={videowatchoutput}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
}

export default HeroSection;
