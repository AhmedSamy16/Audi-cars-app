import React from 'react'
import "./landing.css"
import SedanLogo from "../../../images/Sedan/sedan-logo.png"

const Landing = () => {
    return (
        <header className='sedan_header'>
            <div className='container'>
                <div className='sedan_logo'>
                    <img src={SedanLogo} alt="Audi Logo" />
                </div>
                <div className='sedan_text'>
                    <p>Audi A8 Exterior Lighting</p>
                    <h1>Meant To Cause A Seen.</h1>
                </div>
            </div>
        </header>
    )
}

export default Landing