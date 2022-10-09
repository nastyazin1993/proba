
// import "./Skills.css";
// import skills from "../../utils/skillscard";

// import starblack from "../../image/Starblack.png";
// import stargray from "../../image/Stargray.png";



// function Skills() {
    
//     return (
//         <section className="skills">
//         <h2 className="skills__title title">Skills</h2>
//         <p className="skills__subtitle">I work in such programs as</p>
//         <div className="skills__tablegrid">
//           {skills.map(card => {return (
//             <div className="skills__table" key={card.id}>
//             <div className="skills__table_column">
//               <img
//                 className="skills__table_cell icon"
//                 alt={card.alt}
//                 src={card.img}
//               ></img>
//               <p className="skills__table_cell app_name">{card.name}</p>
//               <div className="skills__table_cell stars">
//               {card.rang === 1 ? 
//               <>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               </>: 
//               <>
//               </>}
//               {card.rang === 2 ? 
//               <>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               </>: 
//               <>
//               </>}
//               {card.rang === 3 ? 
//               <>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               </>: 
//               <>
//               </>}
//               {card.rang === 4 ? 
//               <>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="stargray" alt="foto" src={stargray}></img>
//               </>: 
//               <>
//               </>}
//               {card.rang === 5 ? 
//               <>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               <img className="starblack" alt="foto" src={starblack}></img>
//               </>: 
//               <>
//               </>}
              
//               </div>
//             </div>
//           </div> 
//           )})}
         
//         </div>
//       </section>
//     );
//   }
  
//   export default Skills;

import "./Skills.css";
import skills from "../../utils/skillscard";

import starblack from "../../image/Starblack.png";
import stargray from "../../image/Stargray.png";



function Skills() {

  const arr = [1, 2, 3, 4 , 5];
    
    return (
        <section className="skills">
        <h2 className="skills__title title">Skills</h2>
        <p className="skills__subtitle">I work in such programs as</p>
        <div className="skills__tablegrid">
          {skills.map(card => {return (
            <div className="skills__table" key={card.id}>
            <div className="skills__table_column">
              <img
                className="skills__table_cell icon"
                alt={card.alt}
                src={card.img}
              ></img>
              <p className="skills__table_cell app_name">{card.name}</p>
              <div className="skills__table_cell stars">
                  {arr.map((item) => {
                    if (item <= card.rang) {
                      return (<img className="starblack" alt="foto" src={starblack}></img>);
                    } else {
                      return (<img className="stargray" alt="foto" src={stargray}></img>);
                    }
                  })}
              </div>
            </div>
          </div> 
          )})}
        </div>
      </section>
    );
  }
  
  export default Skills;

