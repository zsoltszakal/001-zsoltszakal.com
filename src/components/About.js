import React from 'react'

function About() {
    return (
        <div className="about">
        <div className="about-me-page">
        <div className="container py-5">
        <div className="row">
            <div className="justify-content-center">
            <h1 className="about-heading">about me</h1>
                <p className="about-text">
                I'm Zsolt Szakal and as you might have already read, I am a self-taught developer, cyber security and cloud enthusiast from Bournemouth, UK. I love learning about new technologies and building things from scratch.      
                </p>
            </div>
        </div>
     </div>
        </div>
        <div className="experience">
                  <div className="d-flex justify-content-center my-5">
              <h1 className="exp-heading">experience</h1>
          </div>
          <div className="container experience-wrapper">
              <div className="timeline-block timeline-block-right">
                  <div className="marker"></div>
                  <div className="timeline-content">
                      <h3>2021</h3>
                      <p>I am currently learning Python and preparing for the AWS Cloud Practitioner Certification exam while while participating in the #100daysofcode and #cloudguruchallenge. </p>
                  </div>
              </div>
              <div className="timeline-block timeline-block-left">
                  <div className="marker"></div>
                  <div className="timeline-content">
                      <h3>2020</h3>
                      <p>Started to build web applications after completing the Responsive Web Design certification on freeCodeCamp and a web development bootcamp on Udemy, where I gained experience with HTML5, CSS3, Bootstrap, React, Express.js, MongoDB, Node.js. </p>
                  </div>
              </div>
              <div className="timeline-block timeline-block-right">
                  <div className="marker"></div>
                  <div className="timeline-content">
                      <h3>2014</h3>
                      <p>I have been working as an executive assistant for a private company. Working in a startup environment for 7 years delivering projects both in individual capacity and as a team member. My main duties are accounting using Quickbooks, daily reports with Office 365, and IT support for the company.</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
        
    )
}

export default About
