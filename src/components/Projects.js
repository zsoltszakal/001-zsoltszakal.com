import React from 'react';
import p1pic from "../p1.jpg"
import p2pic from "../p2.jpg"
import p3pic from "../p3.jpg"
import p4pic from "../p4.jpg"

const Skills = () => {
    return (
        <div className="projects">
            <h1 className="py-5">Projects</h1>
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="box">
                        <div className="circle"></div>
                        <h3 className="projecth3">zNote Project</h3>
                        <h3 className="projecth4">Simple note taking app without a database using React</h3>
                        <img className="ppic" src= { p1pic } alt="Project1Pic"></img>
                        <h3 className="projecth5"><a href="https://github.com/zsoltszakal/znote-app" target="_blank">GitHub</a></h3>
                        <h3 className="projecth5"><a href="https://serene-wildwood-58085.herokuapp.com/" target="_blank">Live Demo</a></h3>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="box">
                        <div className="circle"></div>
                        <h3 className="projecth3">Portfolio Website</h3>
                        <h3 className="projecth4">Personal portfolio website with React and Bootstrap</h3>
                        <img className="ppic" src= { p2pic } alt="Project1Pic"></img>
                        <h3 className="projecth5"><a href="https://github.com/zsoltszakal/001-zsoltszakal.com" target="_blank">GitHub</a></h3>
                        <h3 className="projecth5"><a href="https://zsoltszakal.com/" target="_blank">Live Demo</a></h3>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="box">
                        <div className="circle"></div>
                        <h3 className="projecth3">CloudGuruChallenge</h3>
                        <h3 className="projecth4">Cloud Resume Challenge</h3>
                        <img className="ppic" src= { p3pic } alt="Project1Pic"></img>
                        <h3 className="projecth5"><a href="https://github.com/zsoltszakal/cloudresumechallenge" target="_blank">GitHub GitHub -- In Progress</a></h3>
                        <h3 className="projecth5"><a href="https://github.com/zsoltszakal/cloudresumechallenge" target="_blank">Live Demo GitHub -- In Progress</a></h3>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="box">
                        <div className="circle"></div>
                        <h3 className="projecth3">MailChimp API</h3>
                        <h3 className="projecth4">Newsletter sign up page using MailChimp API</h3>
                        <img className="ppic" src= { p4pic } alt="Project1Pic"></img>
                        <h3 className="projecth5"><a href="#https://fast-beach-97927.herokuapp.com/" target="_blank">GitHub -- In Progress</a></h3>
                        <h3 className="projecth5"><a href="https://fast-beach-97927.herokuapp.com/" target="_blank">Live Demo - In</a></h3>
                    </div>
                </div>
                
                </div>    
                            
                </div>
            </div>
        
    )
}

export default Skills
