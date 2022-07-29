import React from 'react'

const Button = ({ to, variant, text}) => {
    return (
        <a href={to} className={variant === "dark" ? "dark-btn" : "white-btn"} target="_blank" rel="noreferrer">{text}</a>
    )
}

export default Button