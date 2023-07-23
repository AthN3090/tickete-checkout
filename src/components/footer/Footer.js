import logo from "./Logo.svg"
import insta from "./InstagramLogo.svg"
import facebook from "./FacebookLogo.svg"
import twitter from "./TwitterLogo.svg"
import "./Footer.css"
function Footer() {
    return ( 
    <div className="footer-wrapper">
        <div className="footer-logo-wrapper">
            <img src={logo} alt="tickete logo" />
        </div>
        <div className="footer-links">
            <div className="footer-official-links">
                <a href="#">
                © Tickete Inc.
                </a> •
                <a href="#">
                 Privacy
                </a> •
                <a href="#">
                 Terms
                </a> •
                <a href="#">
                 Cancellation policy
                </a>
            </div>
            <div className="footer-social-links">
                <a href="#">
                    <img src={insta} alt="insta logo"/>
                </a>
                <a href="#">
                    <img src={facebook} alt="facebook logo"/>
                </a>
                <a href="#">
                    <img src={twitter} alt="twitter logo"/>
                </a>
            </div>
        </div>
    </div> );
}

export default Footer;