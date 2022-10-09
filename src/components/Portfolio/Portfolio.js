import "./Portfolio.css";

import braun from "../../image/braun.jpg";
import reebok from "../../image/reebok.jpg";
import fashion from "../../image/fashion.jpg";

function Portfolio() {
    
    return (
        <section className="portfolio">
        <h2 className="portfolio__title title">Portfolio</h2>
        <div className="portfolio__block">
          <img className="portfolio__img" alt="foto" src={fashion}></img>
          <p className="portfolio__img_subtitle">
            Online fashion store - Homepage
          </p>
        </div>
        <div className="portfolio__block">
          <img className="portfolio__img" alt="foto" src={reebok}></img>
          <p className="portfolio__img_subtitle">Reebok Store - Concept</p>
        </div>
        <div className="portfolio__block">
          <img className="portfolio__img" alt="foto" src={braun}></img>
          <p className="portfolio__img_subtitle">
            Braun Landing Page - Concept
          </p>
        </div>
      </section>
    );
  }
  
  export default Portfolio;