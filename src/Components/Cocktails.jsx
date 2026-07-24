import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../Constants";
import insta from "../assets/insta.png";
import jsmpro from "../assets/jsmpro.png";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
        markers: true,
      },
    });

    t2.from("#c-left-leaf", {
      x:-100,y:100,
      duration: 0.8,
    });

    t2.from("#c-right-leaf", {
      x:100,y:100,
      duration: 0.8,
    });
  });
  return (
    <>
      <section id="cocktails" className="noisy">
        <img src={insta} id="c-left-leaf" />
        <img src={jsmpro} id="c-right-leaf" />
        <div className="list">
          <div className="popular">
            <h2>Most Popular Cocktails:</h2>
            <ul>
              {cocktailLists.map((drinks) => (
                <li key={drinks.name}>
                  <div className="md:me-28">
                    <h3>{drinks.name}</h3>
                    <p>
                      {drinks.country}|{drinks.detail}
                    </p>
                  </div>
                  <span>-{drinks.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="popular">
            <h2>Most Popular Mocktails:</h2>
            <ul>
              {mockTailLists.map((drinks) => (
                <li key={drinks.name}>
                  <div className="md:me-28">
                    <h3>{drinks.name}</h3>
                    <p>
                      {drinks.country}|{drinks.detail}
                    </p>
                  </div>
                  <span>-{drinks.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cocktails;
