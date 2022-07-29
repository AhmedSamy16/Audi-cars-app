import React from 'react'
import Card from '../../General/Card/Card'
import first from "../../../images/Sedan/first-lighting.jpeg"
import second from "../../../images/Sedan/second-lighting.jpeg"
import third from "../../../images/Sedan/third-lighting.jpeg"

const lightingCardsData = [
    {
        id: 1,
        img: first,
        head: "Available Lighting Package",
        text: "The dramatic stretch of the top light helps emphasize the width of the Audi A8",
        btn: "Read More"
    },
    {
        id: 2,
        img: second,
        head: "LED taillights with with dynamic turn signals",
        text: "Standard taillights are shaped to appear three-dimensions. When the turn signal is activated",
        btn: "Read More"
    },
    {
        id: 3,
        img: third,
        head: "HD Matrix-design LED headlights",
        text: "The available HD Matrix-design headlights include daytime running light",
        btn: "Read More"
    }
]

const LightingCards = () => {
    return (
        <section className='lighting_cards pad-section'>
            <div className='container'>
                <div className='cards_container'>
                    {
                        lightingCardsData.map(item => <Card key={item.id} {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default LightingCards