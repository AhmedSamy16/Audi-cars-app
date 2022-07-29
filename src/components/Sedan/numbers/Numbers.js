import React from 'react'
import "./numbers.css"
import car from "../../../images/Sedan/sedan-numbers.png"
import Button from '../../General/Buttons/Button'

const Numbers = () => {
    return (
        <section className='sedan_numbers'>
            <div className='container'>
                <div className='left_side'>
                    <p className='sedan_available'>Available Models</p>
                    <h2>A8 V6</h2>
                    <small className='sedan_price'>starting at 83,800</small>
                    <div className='sedan_info'>
                        <p>335hp/369 lb-ft of torque</p>
                        <p>3.0-liter TFSND V6</p>
                        <p>quattro all-wheel drice</p>
                    </div>
                    <Button to="https://www.audi.com/en.html" variant="dark" text="request a quote" />
                </div>
                <div className='middle_side'>
                    <img src={car} alt="Audi car" />
                </div>
                <div className='right_side'>
                    <p>
                        A veichle of progress. An experience for the senses. The Audi A8 is poised to take over the executive class.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Numbers