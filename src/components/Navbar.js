import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap'

const Navbar1 = () => { 
    return (
        <div className="main-nav">
        <div className="container">
           <Navbar collapseOnSelect  expand="lg"  className="navbar-custom">
  <Navbar.Brand className="navbar-brand" href="https://zsoltszakal.com/">Zsolt Szakal</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav">
    <span>
    <FontAwesomeIcon icon={ faBars } style={{color: "#ffd369"}}/>
    </span>
  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <li className="nav-item active">
                 <Link smooth={true} to="header" offset={-40} className="nav-link" href="#">home</Link>
                 </li>
      <li className="nav-item">
                 <Link smooth={true} to="about" offset={-50} className="nav-link" href="#">about</Link>                      
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
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
        </div>

    )
}

export default Navbar1
