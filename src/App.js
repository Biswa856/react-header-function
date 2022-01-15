import React from "react";
import "./style.css";
import Aboutus from "./component/Aboutus";
import Home from "./component/Home";
import Contact from "./component/Contact";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

export default function App() {
  return (
    <div>
     <Router>
       <Routes>
         <Route path="/"element={<Home/>}/>
         <Route path="/Contact"element={<Contact/>}/>
         <Route path="/Aboutus"element={<Aboutus/>}/>


       </Routes>
     </Router>
    </div>
  );
}
