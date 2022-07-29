import React from 'react'
import Button from '../Buttons/Button'
import "./card.css"

const Card = ({img, head, text, btn}) => {
    return (
        <article className='sedan_card'>
            <div className='card_image'>
                <img src={img} alt="Audi lighting" />
            </div>
            <div className='card_text'>
                <h3>{head}</h3>
                <p>{text}</p>
            </div>
            {btn && <Button to="https://www.audi.com/en.html" variant="dark" text={btn} />}
        </article>
    )
}

export default Card