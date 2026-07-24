import fb from "../assets/fb.png";
import abt3 from "../assets/abt3.png";
import abt2 from "../assets/abt2.png";
import hi from "../assets/hi.png";
import heroLeftLeaf from "../assets/hero-left-leaf.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
    useGSAP(()=>{
    const titleSplit =SplitText.create("#about h2" ,{type:'words'})
     const t3 =  gsap.timeline({
            scrollTrigger:{
                trigger:"#about",
                start:"top center"
            }
        })

        t3.from(titleSplit.words,{
            opacity:0,
            duration:1,
            yPercent:100,
            ease:"expo.out",
            stagger:0.02
        })

        t3.from(".top-grid div, .bottom-grid div",{
            opacity:0,
            duration:1,
            ease:"power2.inOut",
            stagger:0.02
        },"-=0.5")
  
    })
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p>Best Cocktails</p>
            <h2 className="font-[DM_Serif_Display]">
              where every details matters from garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              tempore dolorem, tempora repellendus ipsam perferendis officia
              maxime rem quisquam voluptatum dolorum fuga pariatur nulla veniam!
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span> 5
              </p>
              <p className="text-sm text-white-100">
                More than 1200+ customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img src={fb} alt="grid-img-1" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy">
            <img src={heroLeftLeaf} alt="grid-img-2" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="noisy">
            <img src={abt3} alt="grid-img-3" />
          </div>
        </div>
      </div>
              <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy">
              <img src={hi} alt="grid-img-4" />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="noisy">
              <img src={abt2} alt="grid-img-5" />
            </div>
          </div>
        </div>
    </div>
  );
};
export default About;
