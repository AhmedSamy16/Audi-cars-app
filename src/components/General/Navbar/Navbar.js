import "./navbar.css"
import Logo from "../../../images/audi-logo.png"
import { Link } from "react-router-dom"

const Navbar = ({ activated }) => {
    return (
        <nav>
            <div className='container'>
                <a href="/" className='logo'>
                    <img src={Logo} alt="Audi Logo" />
                </a>
                <ul>
                    <li>
                        <Link to="/" className={activated === "home" ? "active" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link to="/sedan" className={activated === "sedan" ? "active" : ""}>Sedan</Link>
                    </li>
                    <li>
                        <Link to="/faq" className={activated === "faq" ? "active" : ""}>FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={activated === "contact" ? "active" : ""}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar