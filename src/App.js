import React from "react";
import "./style.css";
import Aboutus from "./component/Aboutus";
import Home from "./component/Home";
import Contact from "./component/Contact";

export default function App() {
  return (
    <div>
     <Home/>
     <Aboutus/>
     <Contact/>
    </div>
  );
}
