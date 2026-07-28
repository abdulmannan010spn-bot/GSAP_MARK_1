import { useState } from "react";
import { sliderLists } from "../../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { StepBack, StepForward } from "lucide-react";

const Menu = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1 },
    );
    gsap.fromTo(
      ".details h2",
      {
        yPercent: 100,
        opacity: 0,
      },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" },
    );

    gsap.fromTo(
      ".details p",
      {
        yPercent: 100,
        opacity: 0,
      },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" },
    );
    gsap.fromTo(
      ".Watch img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, [CurrentIndex]);

  const gotoslide = (index) => {
    const totalLength = sliderLists.length;
    const newIndex = (index + totalLength) % totalLength;
    setCurrentIndex(newIndex);
  };

  const getWatchAt = (indexOffset) => {
    return sliderLists[
      (CurrentIndex + indexOffset + sliderLists.length) % sliderLists.length
    ];
  };

  const currentWatch = getWatchAt(0);
  const prevWatch = getWatchAt(-1);
  const nextWatch = getWatchAt(1);
  return (
    <section id="craftsmanship" className="lg:p-15" aria-labelledby="menu-heading">
      <h2 id="menu-heading" className="sr-only">
        Watches Menu
      </h2>
      <nav className="Watch-tabs" aria-label="Watches navigation">
        {sliderLists.map((elem, index) => {
          const isActive = index === CurrentIndex;
          return (
            <button
              key={elem.id}
              className={`font-[Jura] text-nowrap font-semibold md:text-lg lg:text-4xl ${
                isActive ? "text-yellow" : "text-white"
              }`}
              onClick={() => gotoslide(index)}
            >
              {elem.name}
            </button>
          );
        })}
      </nav>

      {/*
        BUG: two sibling divs both use className="content".
        Your CSS rule for .content includes `relative` positioning:
          .content { flex flex-col justify-between items-center container mx-auto relative; }
        Because BOTH divs get this rule, the second (inner) .content div
        becomes a positioned element that sits later in the DOM than .arrows
        (which is `position: absolute`) — so it visually stacks ON TOP of
        the arrow buttons and physically blocks your clicks from reaching them.
        This is why the arrow (prev/next) buttons don't work while the tab
        buttons above do — the tabs aren't covered by anything.
      */}
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => {
              gotoslide(CurrentIndex - 1);
            }}
          >
            <span className="font-[Jura] whitespace-nowrap pb-5 md:text-2xl">
              {prevWatch.name}
              
            </span>
            <StepBack size={25} />
          </button>
          <button
            className="text-left"
            onClick={() => {
              gotoslide(CurrentIndex + 1);
            }}
          >
            <span className="font-[Jura] whitespace-nowrap pb-5 md:text-2xl">
              {nextWatch.name}
              
            </span>
            <StepForward size={25} className="lg:ml-30 md:ml-30"/>
          </button>
        </div>

        {/*
        BUG: two sibling divs both use className="content".
        Your CSS rule for .content includes `relative` positioning:
          .content { flex flex-col justify-between items-center container mx-auto relative; }
        Because BOTH divs get this rule, the second (inner) .content div
        becomes a positioned element that sits later in the DOM than .arrows
        (which is `position: absolute`) — so it visually stacks ON TOP of
        the arrow buttons and physically blocks your clicks from reaching them.
        This is why the arrow (prev/next) buttons don't work while the tab
        buttons above do — the tabs aren't covered by anything.
      */}
        <div className="Watch">
          <img src={currentWatch.image} className="object-contain" alt="" />
        </div>
        <div className="recipe ">
          <div className="info pb-30">
            <p className="font-[Jura] ">Recipe for:</p>
            <p id="title" className="font-[Jura] whitespace-nowrap md:text-5xl">
              {currentWatch.name}
            </p>
          </div>
          <div className="details">
            <h2 className=" font-[Jura] md:text-4xl">{currentWatch.title}</h2>
            <p>{currentWatch.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;