import logo from "./Logo.svg"
import question from "./Question.svg"
import "./Navbar.css"
function Navbar() {
    return (
    <div className="nav-wrapper">
        <img className="navbar-logo" src={logo} alt="logo" />
        <div className="navbar-help-wrapper">
            <img className="navbar-help" src={question} alt="help" />
            Help
        </div>
        
    </div>);
}

export default Navbar;