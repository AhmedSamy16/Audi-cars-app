import React from 'react'
import "./footer.css"
import AudiLogo from "../../../images/audi-logo.png"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <div className='footer_logo'>
                <img src={AudiLogo} alt="Audi Logo" />
            </div>
            <div className='footer_socials'>
                <p>My name is Ahmed Samy</p>
                <p>My Socials</p>
                <div className='social_icons'>
                    <a href="https://www.linkedin.com/in/ahmed-samy-767117242/" target="_blank" rel="noreferrer">
                        <BsLinkedin className='footer_icon linkedin'/>
                    </a>
                    <a href="https://github.com/AhmedSamy16" target="_blank" rel="noreferrer">
                        <BsGithub className='footer_icon github'/>
                    </a>
                </div>
            </div>
            <small>All rights reserved. Ahmed Samy 2020-{new Date().getFullYear()}</small>
        </footer>
    )
}

export default Footer