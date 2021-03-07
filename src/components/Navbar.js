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
                      <Nav.Link  href="#header">home</Nav.Link>
                    </li>
                    <li className="nav-item active">
                      <Nav.Link href="#about">about</Nav.Link>
                    </li>
                    <li className="nav-item active">
                      <Nav.Link href="#skills">skills</Nav.Link>
                    </li>
                    <li className="nav-item active">
                      <Nav.Link href="#projects">projects</Nav.Link>
                    </li>
                    <li className="nav-item active">
                      <Nav.Link href="#contact">contact</Nav.Link>
                    </li>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
        </div>

    )
}

export default Navbar1
