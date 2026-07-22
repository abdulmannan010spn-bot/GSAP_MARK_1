import { navLinks } from "../../Constants"
import logo from "./../assets/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    useGSAP(()=>{
      const navtween = gsap.timeline({
        scrollTrigger:{
            trigger:"nav",
            start:"bottom top",
        }
      })
      navtween.fromTo('nav',{
        backgroundColor:"transparent"
      },{background:'#00000050',
        backgroundFilter:'blur(10px)',
        duration:1,
        ease:"power2.inOut"
      })
      
    })
  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src={logo} alt="Logo" />
                <p>Velvet Paur</p>
            </a>
            <ul>
                {navLinks.map((links)=>(
                    <li key={links.id}>
                          <a href={`#${links.id}`}>{links.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  ) 
}
export default Navbar