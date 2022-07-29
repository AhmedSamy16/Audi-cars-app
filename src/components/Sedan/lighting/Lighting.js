import React from 'react'
import "./lighting.css"
import lighting from "../../../images/Sedan/sedan-lighting.jpeg"
import Button from "../../General/Buttons/Button"

const Lighting = () => {
    return (
        <section className='sedan_lighting'>
            <div className='container'>
                <div className='lighting_text'>
                    <p>Audi A8 exterior lighting</p>
                    <h3>As leaders in the illuminations arts, our designs are hard to ignore.</h3>
                    <small>
                        We have a history of taking lighting to a new dimensions. in the all-new Audi A8,
                        the sculptural shapes of the headlights and taillights having a sharp look.
                    </small>
                    <Button to="https://www.audi.com/en.html" variant="white" text="Read More" />
                </div>
                <div className='lighting_image'>
                    <img src={lighting} alt="Audi exterior lighting" />
                </div>
            </div>
        </section>
    )
}

export default Lighting