import React,{useEffect,useState}  from 'react'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import "../Styles/Start.css"
import lo from "../Images/lo.png"


function Solorev() {
 const [term,setterm] = useState("");
const [schoolslist,setschools] = useState([]);
let history = useHistory()

const Find = (event) => {
  setterm(event.target.value)
 }

useEffect(() => {
  axios.get(`https://full-stack-api-layti.herokuapp.com/schools`).then((response) => {
   setschools(response.data)
   })
 },[])

 return (
  <div className="solorev">
    <nav className="homenav">
  <div className="logocomb">
  <Link to="/"><h1 className="logoname">Layti</h1></Link>
  <Link to="/"><img className="lo" src={lo} alt={lo}></img> </Link>
  </div>
  <div className="items">
  <a className="support" href="mailto:contact@layti.com?subject=Support"> 
    <div className="side">Support</div>
    </a>
  </div>
  </nav>
  <div className="row">
   <div className="new col-lg-12 col-md-12 col-sm-12 px-4">
   <h4 className="mb-5">Enter the school you want to review</h4>
   <div className="doub2">
   <input onChange={Find} className="input2" placeholder= "Search" required></input>
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

export default Solorev
