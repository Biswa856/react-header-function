import React from "react";
import {Link} from"react-router-dom";
export default function Navbar(){
  return(
    <nav>
      <Link to="/Aboutus" className="Link">
        Aboutus
        <br/>
        </Link>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/Contact">Contact</Link>

    </nav>
  )
}