import footerLeftLeaf from "../assets/footer-left-leaf.png";
import jsmpro from "../assets/jsmpro.png";

function HeroSection() {
  return (
    <section id="hero" className="noisy">
      <h1 className="title font-[DM_Serif_Display]">MOJITO</h1>

      <img className="left-leaf" src={footerLeftLeaf} alt="left leaf" />
      <img className="right-leaf" src={jsmpro} alt="right leaf" />
      <div className="body">
        <div className="content">
            <div className="space-y-5 hidden md:block font-[DM_Serif_Display]">
                <p>Cool Crips & Classic</p>
                <p className="subtitle font-[DM_Serif_Display]">
                    Sip the sprite <br />of summer
                </p>
            </div>
            <div className="view-cocktails">
                <p className="subtitle font-[DM_Serif_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo eum veritatis quos autem fuga! Voluptatem, voluptates error. Error eaque </p>
                <a href="#cocktails">View Cocktails</a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;