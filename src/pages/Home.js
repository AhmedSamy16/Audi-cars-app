import Landing from '../components/Home/Landing/Landing';
import Features from '../components/Home/Features/Features';
import Details from '../components/Home/Details/Details';
import Numbers from '../components/Home/Numbers/Numbers';
import Cockpit from '../components/Home/Cockpit/Cockpit';
import Explore from '../components/Home/Explore/Explore';
import Navbar from '../components/General/Navbar/Navbar'
import useDocumentTitle from '../Hooks/useDocumentTitle';
import Footer from "../components/General/Footer/Footer"


const Home = () => {
  useDocumentTitle("Audi Cars")
  return (
    <>
        <Navbar activated="home" />
        <Landing />
        <Features />
        <Details />
        <Numbers />
        <Cockpit />
        <Explore />
        <Footer />
    </>
  )
}

export default Home