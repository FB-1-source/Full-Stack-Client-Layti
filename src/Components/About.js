import React from 'react'
import "../Styles/About.css"
import img2 from "../Images/img2layti.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function About() {
 AOS.init();
 return (
  <div data-aos="fade-up" data-aos-once={true} className="about">
   <div className="row">
   <div className="col-lg-12 col-sm-12 pb-5">
    <h1>Reviews of your universities nightlife</h1>
    </div>
    <div className="col-lg-6 col-sm-12 px-4">
    <p>Before going to school do you wish there was a platform you could check and see how the nightlife at your school was? If yes, then you are at the right place! Share your nightlife experience and help prospective students know where to go and where to stay away from. </p>
    </div>
   </div>
   <div className="img1">
    <img className="col-sm-12 col-lg-12 col-md-12 img-fluid. max-width: 100%" src={img2} alt={img2}></img>
   </div>
  </div>
 )
}

export default About

