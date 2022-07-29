import React from 'react'
import Navbar from '../components/General/Navbar/Navbar';
import useDocumentTitle from '../Hooks/useDocumentTitle';
import ContactComponent from '../components/Contact/Contact';
import Footer from "../components/General/Footer/Footer"

const Contact = () => {
    useDocumentTitle("Contact Us")
    return (
        <>
            <Navbar activated="contact" />
            <ContactComponent />
            <Footer />
        </>
    )
}

export default Contact