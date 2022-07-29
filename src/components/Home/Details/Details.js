import "./details.css"
import Text from "../../../images/details-text.png"
import Wheel from "../../../images/steering-wheel.png"
import Tire from "../../../images/tire.png"
import Led from "../../../images/torch.png"
import Car from "../../../images/car (1).png"
import DetailsCard from "./DetailsCard"

const detailsData = [
    {
        id: 1,
        icon: Wheel,
        title: "Quattro All-Wheel Drive",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur."
    },
    {
        id: 2,
        icon: Tire,
        title: "Magnetic Ride",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur."
    },
    {
        id: 3,
        icon: Led,
        title: "Full Led Headlights",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur."
    },
    {
        id: 4,
        icon: Car,
        title: "Exterior Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur."
    }
]

const Details = () => {
    return (
        <section className="details">
            <div className="container">
                <div className="bg-text">
                    <img src={Text} alt="Audi" />
                </div>
                <div className="details__content">
                    {
                        detailsData.map(item => <DetailsCard key={item.id} {...item} />)
                    }
                </div>
                <div className="details__text">
                    <h3>The Lap and Mind of Luxury</h3>
                    <p>This fully digital instrument dispaly presents both performance and MMI infomation on its crisp, 12.3 inch display. 
                        The driver can easily switch between three viewing modes: infotainment, Classic and Sport, via the steering wheel or MMI touch controls. 
                        For 2018, all Audi R8 models include the Audi smartphone interface which allows for compatible smartphone integration via 
                        Apple Carplay or Google or Android Auto.</p>
                </div>
            </div>
        </section>
    )
}

export default Details