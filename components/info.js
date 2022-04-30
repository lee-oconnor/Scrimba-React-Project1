import React from "react"

export default function Info() {
    return(
        <div className="info-container">
           
            <header>
                <img className="headshot" src= "./components/portrait.png" alt="headshot"/>
            </header>
            
            <div className="name-info">
                <h3 className="full-name">Lee O'Connor</h3>
                <h4 className="occupation">Front-End Developer</h4>
                <a className="website" href="http://www.leeoconnor.net">leeoconnor.net</a>
            </div>
            
                <div className="contact-buttons">
                    <button className="email-button">
                        <img className="mail-image" src="./components/Mail.png" />
                       Email
                    </button>
                    <button className="linkedIn-button">
                        <img className="linkedIn-logo"src="./components/linkedin.png" width="16px" height="16px"/>LinkedIn</button>
                </div>
                
            </div>
            
    )
}