import React from 'react'
import "./accordion.css"
import { AiOutlineArrowDown } from "react-icons/ai"
import { AiOutlineArrowUp } from "react-icons/ai"

const Accordion = ({ id, title, answer, active, setActive }) => {
    return (
        <div className='accordion'>
            <div className='accordion_title'>
                <h3>{title}</h3>
                <span className='accordion_icon' onClick={() => active === id ? setActive("") : setActive(id)}>
                    {active === id ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </span>
            </div>
            <p className={active === id ? "active" : ""}>
                {answer}
            </p>
        </div>
    )
}

export default Accordion