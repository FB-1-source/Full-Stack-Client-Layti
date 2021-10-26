import React from 'react'
import Start from './Components/Start'
import About from './Components/About'
import Featured from './Components/Featured'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Schoolinfo from "./Components/Schoolinfo"
import Write from "./Components/Write"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Carouselsec from './Components/Carouselsec';
import ScrollToTop from './Components/ScrollToTop';
import Solorev from './Components/Solorev';

function App() {
  return (
    <div>
    <Router>
    <ScrollToTop/>
    <Route exact path="/">
     <Start/>
     <About/>
     <Carouselsec/>
     <Featured/>
     <Footer/>
     </Route>
     <Route exact path="/rate">
       <Solorev/>
     </Route>
     <Route exact path="/schools/:id">
       <Schoolinfo/>
       <Footer/>
     </Route>
     <Route exact path="/schools/:id/rate">
    <Navbar/>
    <Write/>
    <Footer/>
     </Route>
     </Router>
    </div>
  )
}

export default App

