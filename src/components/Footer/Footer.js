import "./Footer.css";

import be from "../../image/be-icon.png";
import Instagram from "../../image/inst-icon.png";
import ball from "../../image/ball-icon.png";
import inicon from "../../image/in-icon.png";

function Footer() {
    
    return (
        <footer className="footer">
        <h2 className="footer__title title">Contacts</h2>
        <p className="footer__subtitle">
          Want to know more or just chat? You are welcome!
        </p>
        <button className="footer__button">Send message</button>
        <div className="footer__links">
          <a className="footer__links_link" href="#">
            <img className="footer__links_icon" alt="icon" src={inicon}></img>
          </a>
          <a className="footer__links_link" href="#">
            <img className="footer__links_icon" alt="icon" src={Instagram}></img>
          </a>
          <a className="footer__links_link" href="#">
            <img className="footer__links_icon" alt="icon" src={be}></img>
          </a>
          <a className="footer__links_link" href="#">
            <img className="footer__links_icon" alt="icon" src={ball}></img>
          </a>
        </div>
        <p className="footer__text">
          Like me on <br />LinkedIn, Instagram, Behance, Dribble
        </p>
      </footer>
    );
  }
  
  export default Footer;