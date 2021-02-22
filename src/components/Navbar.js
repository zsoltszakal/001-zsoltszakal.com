import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
        <div className="container">
            <a className="navbar-brand" href="https://zsoltszakal.com/">Zsolt Szakal</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={ faBars } style={{color: "#ffd369"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                 <li className="nav-item active">
                 <Link smooth={true} to="header" offset={-50} className="nav-link" href="#">home</Link>
                 </li>
                 <li className="nav-item">
                 <Link smooth={true} to="about" offset={-47} className="nav-link" href="#">about</Link>                      
                 </li>
                 <li className="nav-item">
                 <Link smooth={true} to="skills" offset={-48} className="nav-link" href="#">skills</Link>                      
                 </li>
                 <li className="nav-item">
                 <Link smooth={true} to="projects" offset={-48} className="nav-link" href="#">projects</Link>                      
                 </li>
                                 <li className="nav-item">
                <Link smooth={true} to="contacts" offset={-48} className="nav-link" href="#">contact</Link>                      
                 </li>
                </ul>   
                </div>
                </div>
</nav>
    )
}

export default Navbar
