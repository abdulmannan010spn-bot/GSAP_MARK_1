
import { watchLists, premiumLists } from "../../Constants";



const Cocktails = () => {

  return (
    <>
      <section id="cocktails" className="noisy">
        <div className="list">
          <div className="popular">
            <h2>Most Popular Watches:</h2>
            <ul>
              {watchLists.map((drinks) => (
                <li key={drinks.name}>
                  <div className="md:me-28">
                    <h3 className="font-[Jura]">{drinks.name}</h3>
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
            <h2>Most Premium Watches:</h2>
            <ul>
              {premiumLists.map((drinks) => (
                <li key={drinks.name}>
                  <div className="md:me-28">
                    <h3 className="font-[Jura]">{drinks.name}</h3>
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
