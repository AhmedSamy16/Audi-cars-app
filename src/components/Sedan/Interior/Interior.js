import React from 'react'
import Card from '../../General/Card/Card'
import firstInterior from "../../../images/Sedan/first-interior.jpeg"
import secondInterior from "../../../images/Sedan/second-interior.jpeg"
import thirdInterior from "../../../images/Sedan/third-interior.jpeg"

const interiorData = [
    {
        id: 7,
        img: firstInterior,
        head: "Rear Matrix LED reading lights",
        text: "Ideal fro raer seat passengers who want to enjoy a good read or get some work done."
    },
    {
        id: 8,
        img: secondInterior,
        head: "Rear relaxation seat with foot message",
        text: "The relaxation effect of a foot message is something to look forward to after a long day."
    },
    {
        id: 9,
        img: thirdInterior,
        head: "Bang & Olufsen 3D Sound",
        text: "Ideal for passengers who ant to enjoy a good music during the trip."
    }
]

const Interior = () => {
    return (
        <section className='interior pad-section'>
            <div className='container'>
                <div className='cards_container'>
                    {
                        interiorData.map(item => <Card key={item.id} {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Interior