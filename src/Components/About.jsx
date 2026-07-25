import watch11 from "../assets/watch11.png";
import watch7 from "../assets/watch7.png";
import watch8 from "../assets/watch8.png";
import watch10 from "../assets/watch10.png";
import watch9 from "../assets/watch9.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#collections h2", { type: "words" });
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#collections",
        start: "top center",
      },
    });

    t3.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });

    t3.from(
      ".top-grid div, .bottom-grid div",
      {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.02,
      },
      "-=0.5",
    );
  });
  return (
    <div id="collections">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p>Best Watches</p>
            <h2 className="font-[Jura]">
              where every details matters from garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Discover the perfect blend of timeless elegance and modern
              craftsmanship with Sonata Watches. Designed for every occasion,
              each timepiece offers exceptional precision, premium quality, and
              a style that complements your personality.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.8</span> / 5
              </p>
              <p className="text-sm text-white-100">
                Trusted by 10,000+ happy customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">

            <img className="w-full h-full object-cover object-center" src={watch11} alt="grid-img-1" />
        
        </div>

        <div className="md:col-span-6">
    
            <img className="w-full h-full object-cover object-center" src={watch9} alt="grid-img-2" />
       
        </div>

        <div className="md:col-span-3">
 
            <img className="w-full h-full object-cover object-center" src={watch7} alt="grid-img-3" />
  
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
         
            <img className="w-full h-full object-cover object-center" src={watch10} alt="grid-img-4" />
        
        </div>

        <div className="md:col-span-4">

            <img className="w-full h-full object-cover object-center" src={watch8} alt="grid-img-5" />
          
        </div>
      </div>
    </div>
  );
};
export default About;
