import React,{useEffect,useState} from 'react'
import "../Styles/Schoolinfo.css"
import lo from "../Images/lo.png"
import {Link} from "react-router-dom"
import axios from "axios"
import "../Styles/Start.css"
import "../Styles/Navbar.css"
import { useHistory} from "react-router-dom";


function Navbar() {

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

 return (<div>
     <nav className="navbar navbarrev">
  <Link to="/"><img className="logo" src={lo} alt={lo}></img></Link>
  <div className="topnav">
  <input className="inputnav" placeholder="Search for another school" onChange={Find}></input>
  {term.length === 0?  "" : <div className= "searchbox2">
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
</nav>
  </div>
 )
}

export default Navbar
