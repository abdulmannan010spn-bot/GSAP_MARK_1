import gsap from "gsap";
import footerLeftLeaf from "../assets/footer-left-leaf.png";
import arrow from "../assets/arrow.png";
import output from "../assets/output.mp4";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function HeroSection() {
  const rightLeafRef = useRef(null);
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      .to(".left-leaf", {
        y: 200,
      })
      .to(rightLeafRef.current, {
        y: 200,
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
        <h1 className="title font-[DM_Serif_Display]">MOJITO</h1>

        <img className="left-leaf" src={footerLeftLeaf} alt="left leaf" />
        <img
          ref={rightLeafRef}
          className="right-leaf"
          src={arrow}
          alt="right leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block font-[DM_Serif_Display]">
              <p>Cool Crips & Classic</p>
              <p className="subtitle font-[DM_Serif_Display]">
                Sip the sprite <br />
                of summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle font-[DM_Serif_Display]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nemo eum veritatis quos autem fuga! Voluptatem,
                voluptates error. Error eaque{" "}
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0 ">
        <video
          className="video"
          ref={videoref}
          src={output}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
}

export default HeroSection;
