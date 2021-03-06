import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import uni1 from "../Images/uni1.jpg"
import uni2 from "../Images/uni2.jpg"
import uni3 from "../Images/uni3.jpg"
import uni4 from "../Images/uni4.jpg"
import uni5 from "../Images/uni5.jpg"
import uni6 from "../Images/uni6.jpg"
import uni7 from "../Images/uni7.jpg"
import uni8 from "../Images/uni8.jpg"
import uni9 from "../Images/uni9.jpg"
import "../Styles/Carouselsec.css"
import { useHistory } from 'react-router-dom';

function Carouselsec() {
let history = useHistory()

 return (
  <div className="caros">
  <h1>Featured Schools</h1>
  <div className="carosec">
  <div className="comb" onClick={() => {history.push(`/schools/705`);
    }}><img className="img" src={uni1} alt={uni1}></img>
  <h5>Howard University</h5>
  </div>
  <div className="comb" onClick={() => {history.push(`/schools/1950`);
    }}><img className="img" src={uni2} alt={uni2}></img>
  <h5>Virginia Tech</h5>
  </div>
  <div className="comb" onClick={() => {history.push(`/schools/1946`);
    }}><img className="img" src={uni3} alt={uni3}></img>
  <h5>Virginia Commonwealth University</h5>
  </div>
  <div className="comb" onClick={() => {history.push(`/schools/1904`);
    }}><img className="img" src={uni4} alt={uni4}></img>
  <h5>University of Virginia</h5>
  </div>
  <div className="comb" onClick={() => {history.push(`/schools/663`);
    }}><img className="img" src={uni5} alt={uni5}></img>
  <h5>Hampton University</h5>
  </div>
  <div className="comb" onClick={() => {history.push(`/schools/1767`);
    }}><img className="img" src={uni6} alt={uni6}></img>
  <h5>University of Maryland</h5>
  </div>
  <div className="comb" onClick={() => {history.push(`/schools/762`);
    }}><img className="img" src={uni7} alt={uni7}></img>
  <h5>James Madison University</h5>
  </div>
  <div className="comb" onClick={() => {history.push(`/schools/611`);
    }}><img className="img" src={uni8} alt={uni8}></img>
  <h5>Georgetown University</h5>
  </div>
  <div className="comb" onClick={() => {history.push(`/schools/612`);
    }}><img className="img" src={uni9} alt={uni9}></img>
  <h5>George Washington University</h5>
  </div>
  </div>
  </div>
 )
}

export default Carouselsec
