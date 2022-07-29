import "./features.css"
import Agile from "../../../images/agile.png"
import Speed from "../../../images/speed2.png"
import Thunder from "../../../images/thunder.png"
import FeatureCard from "./FeatureCard"

const featuresData = [
    {
        id: 1,
        title: "Agility",
        description: "Lorem ipsum dolor amet, consectetur adipiscing elit. adipiscing elit.",
        icon: Agile
    },
    {
        id: 2,
        title: "Performance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing. consectetur adipiscing ",
        icon: Speed,
    },
    {
        id: 3,
        title: "Cutting Edge",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur.",
        icon: Thunder
    }
]

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="features__text">
                    <h2>Vorsteiner creates new VRS Aero Program 2018 Audi R8</h2>
                    <p>while customers could really make their second generation Audi R8 coupe look more stylish and more dynamic, 
                        they could also opt for a newly created aero program from German tuner vorsteiner.</p>
                </div>
                <div className="features__content">
                    {
                        featuresData.map(feature => <FeatureCard key={feature.id} {...feature} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Features