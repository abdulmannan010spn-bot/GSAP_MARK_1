import { featureLists, goodLists } from "../../Constants";
import { CircleCheck } from "lucide-react";
import p from "../assets/p.png";

const Art = () => {
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
    </div>
  );
};
export default Art;
