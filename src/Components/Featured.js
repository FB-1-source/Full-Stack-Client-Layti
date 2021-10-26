import React from 'react'
import "../Styles/Featured.css"
import group from "../Images/group.jpg"



function Featured() {
 return (<div className="feat">
 <div className="circle">
 <div className="textside">
 <h1>Want More</h1>
 <div>Let us know what to add next!</div>
 <a className="contact" href="mailto:layti@gmail.com?subject=Suggestions">
   <button>Contact</button>
 </a>
 </div>
 <div className="imgside">
 <img className="gpimg img-fluid" src={group} alt={group}></img>
 </div>
 </div>
   </div>
 )
}

export default Featured
