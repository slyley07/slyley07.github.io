import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img className="headshot" src="./images/headshot.jpg" />
            <div className="info-container">
                <h1>
                    Bradley Showalter
                </h1>
                
                <h3>
                    Software Engineer, Frontend
                </h3>
                
                <h5>
                    <a href="https://www.botanybrad.com">botanybrad.com</a>
                </h5>
            </div>
            
            <div className="button-container">
                <a className="email" href="mailto:showalter.bradley@gmail.com">
                    <img src="./images/mail_lightgrey.svg" />
                    <span>Email</span>
                </a>
                
                
                
                <a className="linkedin" href="https://linkedin.com/in/bradleyshowalter">
                    <img src="./images/linkedin_white.svg"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}