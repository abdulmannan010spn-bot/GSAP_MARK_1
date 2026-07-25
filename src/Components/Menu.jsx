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
      ".cocktail img",
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

  const getCocktailAt = (indexOffset) => {
    return sliderLists[
      (CurrentIndex + indexOffset + sliderLists.length) % sliderLists.length
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <h2 id="menu-heading" className="sr-only">
        Cocktails Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktails navigation">
        {sliderLists.map((elem, index) => {
          const isActive = index === CurrentIndex;
          return (
            <button
              key={elem.id}
              className={`font-[Jura] text-nowrap font-semibold ${
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
            <span className="font-[Jura] whitespace-nowrap pb-5 ">
              {prevCocktail.name}
              
            </span>
            <StepBack size={30} />
          </button>
          <button
            className="text-left"
            onClick={() => {
              gotoslide(CurrentIndex + 1);
            }}
          >
            <span className="font-[Jura] whitespace-nowrap pb-5">
              {nextCocktail.name}
              
            </span>
            <StepForward size={30} className="ml-36"/>
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
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" alt="" />
        </div>
        <div className="recipe ">
          <div className="info pb-30">
            <p className="font-[Jura]">Recipe for:</p>
            <p id="title" className="font-[Jura] whitespace-nowrap">
              {currentCocktail.name}
            </p>
          </div>
          <div className="details">
            <h2 className=" font-[Jura]">{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
