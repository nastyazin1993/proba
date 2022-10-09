import me from "../../image/me.jpg";
import { Link } from "react-router-dom";
import "./Me.css"

function Me() {
    
    return (
      <section className="me">
      <div className="me__about">
        <h1 className="me__title">Denis Novik</h1>
        <p className="me__subtitle">
          {" "}
          UX | UI designer <br />
          24 years old, Minsk
        </p>
        <div className="me__link">
          <Link className="me__link_eng" to="#">
            |ENG
          </Link>
          <Link className="me__link_ru" to="#">
            RU
          </Link>
        </div>
      </div>
      <img className="me__image" alt="foto" src={me} />
    </section>
    );
  }
  
  export default Me;