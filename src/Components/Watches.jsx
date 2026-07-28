
import { watchLists, premiumLists } from "../../Constants";



const Watches = () => {

  return (
    <>
      <section id="collections" className="noisy lg:p-15">
        <div className="list">
          <div className="popular">
            <h2>Most Popular Watches:</h2>
            <ul>
              {watchLists.map((elem) => (
                <li key={elem.name}>
                  <div className="md:me-28">
                    <h3 className="font-[Jura]">{elem.name}</h3>
                    <p>
                      {elem.country}|{elem.detail}
                    </p>
                  </div>
                  <span>-{elem.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="popular">
            <h2>Most Premium Watches:</h2>
            <ul>
              {premiumLists.map((elem) => (
                <li key={elem.name}>
                  <div className="md:me-28">
                    <h3 className="font-[Jura]">{elem.name}</h3>
                    <p>
                      {elem.country}|{elem.detail}
                    </p>
                  </div>
                  <span>-{elem.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Watches;
