import { navLinks } from "../../Constants"
import logo from "./../assets/logo.png";

const Navbar = () => {
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