import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
            <a className="navbar-brand" href="https://zsoltszakal.com/">Zsolt Szakal</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={ faBars } style={{color: "#27ae60"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                 <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">About</a>                        
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Skills</a>                        
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Projects</a>                        
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Experience</a>                        
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Contact</a>                        
                 </li>
                </ul>   
                </div>
</nav>
    )
}

export default Navbar
