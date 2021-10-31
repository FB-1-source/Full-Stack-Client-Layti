import React,{useState, useEffect} from 'react'
import "../Styles/Start.css"
import axios from "axios";
import { useHistory, Link} from "react-router-dom";
import lo from "../Images/lo.png"

function Start() {
const [term,setterm] = useState("");
const [schoolslist,setschools] = useState([]);
let history = useHistory()

const Find = (event) => {
 setterm(event.target.value)
}

useEffect(() => {
 axios.get("https://full-stack-api-layti.herokuapp.com/schools").then((response) => {
  setschools(response.data)

  })
},[])

 return (
  <div className="start">
  <nav className="homenav">
  <div>
  <h1 className="logoname">Layti</h1>
  <img className="lo" src={lo} alt={lo}></img>
  </div>
  <div className="items">
    <a className="support" href="mailto:contact@layti.com?subject=Support"> 
    <div className="side">Support</div>
    </a>
    <Link to="/rate"><button className="navbtn">Leave Review</button></Link>
  </div>
  </nav>
  <div className="row">
   <div className="new col-lg-12 col-md-12 col-sm-12 px-4">
   <h1 className="mb-3">The best college nightlife reviews</h1>
   <h5 className="mb-4">See the latest review of your school</h5>
   <div className="doub">
   <input onChange={Find} className="input1" placeholder= "Search for your school" required></input>
   </div>
   <div className="testbox">
   {term.length === 0?  "" : <div className= "searchbox">
   {schoolslist.filter((val) => {
    if(term === ""){
     return val
    }else if (val.name.toLowerCase().includes(term.toLowerCase())){
     return val
    }
   }).map((val) => {
    return <div key={val.id} onClick={() => {history.push(`/schools/${val.id}`);
    }} className="inst">{val.name}</div>
   })}
   </div>
   }
   </div>
   </div>
   </div>
  </div>
 )
}

export default Start;
