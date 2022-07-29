import "./numbers.css"
import NumberCard from "./NumberCard"
import Speed from "../../../images/speed.png"
import gears from "../../../images/gears.png"
import time from "../../../images/time.png"


const numbersData = [
    {
        id: 1,
        img: Speed,
        title: 205,
        secondary: "Top Speed"
    },
    {
        id: 2,
        img: gears,
        title: 7,
        secondary: 'Gear Box'
    },
    {
        id: 3,
        img: time,
        title: 3.2,
        secondary: 'Accelerations'
    }
]

const Numbers = () => {
    return (
        <section className='numbers'>
            <div className="container">
                <div className="numbers__content">
                    {
                        numbersData.map(item => <NumberCard key={item.id} {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Numbers