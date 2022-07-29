import useDocumentTitle from '../Hooks/useDocumentTitle';
import Navbar from '../components/General/Navbar/Navbar'
import Landing from '../components/Sedan/landing/Landing';
import Overview from '../components/Sedan/overview/Overview';
import Numbers from '../components/Sedan/numbers/Numbers';
import Lighting from '../components/Sedan/lighting/Lighting';
import LightingCards from '../components/Sedan/lightingCards/LightingCards';
import Car from '../components/Sedan/Car/Car';
import Footer from "../components/General/Footer/Footer"
import Interior from '../components/Sedan/Interior/Interior';
import overview1 from "../images/Sedan/sedan-overview.png"
import overview2 from "../images/Sedan/sedan-overview2.png"

const firstOverview = {
        id: 5,
        style: {
            "backgroundImage": `url(${overview1})`
        },
        title: "The All-New 2019 Audi A8",
        header: "Luxury found the vehicle it deserves",
        small: "starting at $83,800",
        text: "The dramatic stretch of the top light bar helps emphasize the width of the Audi A8.Using advanced OLED lighting technology, the available OLED taillights with animation perform a choreographed dance of light when the vehicle is locked or unlocked."
}

const secondOverview = {
    id: 6,
    style: {
        "backgroundImage": `url(${overview2})`
    },
    title: "Audi A8 interior design",
    header: "Because your presence lights up the room.",
    text: "The Audi A8 can save up to 400 different settings for up to seven different profiles on one Audi advanced key-1 This level of personalization helps make every drive a memorable one."
}


const Sedan = () => {
    useDocumentTitle("Sedan")
    return (
        <>
            <Navbar activated="sedan" />
            <Landing />
            <Overview key={firstOverview.id} {...firstOverview} />
            <Numbers />
            <Lighting />
            <LightingCards />
            <Overview key={secondOverview.id} {...secondOverview} />
            <Car />
            <Interior />
            <Footer />
        </>
    )
}

export default Sedan