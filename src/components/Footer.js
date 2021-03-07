import React from "react";
import { 
    TwitterIcon,
    LinkedinIcon,
    TelegramIcon,

 } from "react-share";
 import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div classNam="d-flex">
                            <p>Zsolt Szakal</p>
                        </div>
                        <div classNam="d-flex">
                            <p>Bournemouth, United Kingdom</p>
                        </div>
                        <div classNam="d-flex">
                        
                            
                        </div>
                        <div classNam="d-flex">
                            <a href="mailto:zsolt@zsoltszakal.com" rel="noopener">zsolt@zsoltszakal.com</a>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                      <Nav.Link className="footer-link"  href="#home" rel="noopener noreferrer">home</Nav.Link>
                      <Nav.Link  className="footer-link" href="#about" rel="noopener noreferrer">about</Nav.Link>
                            </div>
                            <div className="col">
                      <Nav.Link className="footer-link" href="#skills" rel="noopener noreferrer">skills</Nav.Link>
                      <Nav.Link  className="footer-link" href="#projects" rel="noopener noreferrer">projects</Nav.Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">                        
                        <a  rel="noopener noreferrer" href="https://twitter.com/ZsoltSzakal1"><TwitterIcon className="mx-3" size={36} /></a>  
                        <a  rel="noopener noreferrer" href="https://www.linkedin.com/in/zsolt-szakal-130050202/"><LinkedinIcon className="mx-3" size={36}/></a>
                        <a  rel="noopener noreferrer" href="https://t.me/zsoltszakal"><TelegramIcon className="mx-3" size={36} /></a>                 
                        </div>
                        <p className="pt-3 text-center"> Copyright © &nbsp; 
                        {new Date().getFullYear()} &nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer