import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faJs, faReact, faNodeJs, faEnvira, faPython, faGitAlt, faUbuntu, faDocker, faAws} from '@fortawesome/free-brands-svg-icons';
import { faCloud, faTerminal, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="py-5">Skills</h1>
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faPython} size="3x" /></div>
                        <h3 className="skill">python</h3>
                        <h3 className="skill-s">⭐⭐☆☆</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="3x" /></div>
                        <h3 className="skill">react</h3>
                        <h3 className="skill-s">⭐⭐☆☆</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faEnvira} size="3x" /></div>
                        <h3 className="skill">mongodb</h3>
                        <h3 className="skill-s">⭐⭐☆☆</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="3x" /></div>
                        <h3 className="skill">sql</h3>
                        <h3 className="skill-s">⭐⭐☆☆</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faAws} size="3x" /></div>
                        <h3 className="skill">aws</h3>
                        <h3 className="skill-s">⭐⭐☆☆</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faCloud} size="3x" /></div>
                        <h3 className="skill">gcs</h3>
                        <h3 className="skill-s">⭐⭐☆☆</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faDocker} size="3x" /></div>
                        <h3 className="skill">docker</h3>
                        <h3 className="skill-s">⭐⭐☆☆</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faGitAlt} size="3x" /></div>
                        <h3 className="skill">git</h3>
                        <h3 className="skill-s">⭐⭐⭐☆</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faTerminal} size="3x" /></div>
                        <h3 className="skill">cli</h3>
                        <h3 className="skill-s">⭐⭐⭐☆</h3>
                    </div>
                </div>
                <div className="skill-b"></div>
                
               
                </div>    
                            
                </div>
            </div>
        
    )
}

export default Skills
