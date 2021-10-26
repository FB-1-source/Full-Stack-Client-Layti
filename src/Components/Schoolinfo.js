import React,{useState,useEffect}from 'react';
import {useParams} from "react-router-dom"
import axios from 'axios';
import "../Styles/Schoolinfo.css"
import {Link} from "react-router-dom"
import moment from "moment"
import Navbar from './Navbar';




function Schoolinfo() {
let {id} = useParams()
const [schoolname, setschoolname] = useState("")
const [houseval, sethouseval] = useState([]);
const [barval, setbarval] = useState([]);
const [safetyval, setsafetyval] = useState([]);
const [overallval, setoverallval] = useState([]);
const [revinfo, setrevinfo] = useState([]);
const [numofrev, setnumofrev] = useState();
useEffect(() => {
 axios.get(`https://full-stack-api-layti.herokuapp.com/schools/id/${id}`).then((response) => {
  setschoolname(response.data)
  })
},[]) // eslint-disable-line react-hooks/exhaustive-deps

useEffect(() => {
  axios.get(`https://full-stack-api-layti.herokuapp.com/reviews/${id}`).then((response) => {
   setrevinfo(response.data)
   setnumofrev(response.data.length)
   for(let i = 0; i < response.data.length; i++){
      houseval.push(response.data[i].house)
      barval.push(response.data[i].bar)
      safetyval.push(response.data[i].safety)
      overallval.push(response.data[i].overall)  
   }
   const average = (array) => array.reduce((a, b) => a + b, 0) / array.length;
   sethouseval(Math.round(average(houseval) * 10) / 10)
   setbarval(Math.round(average(barval) * 10) / 10)
   setsafetyval(Math.round(average(safetyval) * 10) / 10)
   setoverallval(Math.round(average(overallval) * 10) / 10)
   })
 },[])// eslint-disable-line react-hooks/exhaustive-deps
 return (<div>
 <div className="all">
 <Navbar/>
 </div>
   <div className="sname">
   <h1>{schoolname.name}</h1>
   </div>
   <div className="infosec">
   <div className="topsec">
     <h1><i className="fas fa-star"></i> {isNaN(overallval)? 0: overallval} · {numofrev} reviews</h1>
     <div className="threesec">
     <h4>House</h4>
     <div className="progress">
  <div className="progress-bar bg-dark" role="progressbar" style={{width: (houseval / 5) * 100 + "%"}} aria-valuenow={parseInt(`${houseval / 5 * 100}`)} aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>{isNaN(houseval)? 0: houseval}</h4>
</div>
     <div className="threesec">
     <h4>Bar</h4>
     <div className="progress">
  <div className="progress-bar bg-dark" role="progressbar" style={{width: (barval / 5) * 100 + "%"}} aria-valuenow={parseInt(`${barval / 5 * 100}`)} aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>{isNaN(barval)? 0: barval}</h4>
</div>
     <div className="threesec">
     <h4>Safety</h4>
     <div className="progress">
  <div className="progress-bar bg-dark" role="progressbar" style={{width: (safetyval / 5) * 100 + "%"}} aria-valuenow={parseInt(`${safetyval / 5 * 100}`)} aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>{isNaN(safetyval)? 0: safetyval}</h4>
</div>
     <Link to={`/schools/${id}/rate`}><button className="ratebtn">Rate {schoolname.name}</button></Link>
     </div>
     {revinfo.length === 0? <div className ="mainnorev"><h3 className ="norev">{schoolname.name} doesn't have any reviews yet.</h3> <Link to={`/schools/${id}/rate`}><button className="ratebtn2">Be the first to rate {schoolname.name}</button></Link>
     </div>: <div className="toprevbox">
       {revinfo && revinfo.map((val) => {
        return <div className="revbox">
        <div className="firstsec">
        <div className="orating">Overall Rating: {val.overall}</div>
        {val.recommend === "Yes"? <div> 
        <span>Recommends</span>
        <i className="fas fa-thumbs-up"></i>
        </div> :<div><span>Would Not Recommend</span>
        <i className="fas fa-thumbs-down"></i>
        </div>
         }
         </div>
        <div>{val.reviews}</div>
        <div className="date">{"- " + moment(val.createdAt).format("MMM Do YYYY")}</div>
        </div>
       })}
     </div>
     }
   </div>
  </div>
 )
}

export default Schoolinfo
