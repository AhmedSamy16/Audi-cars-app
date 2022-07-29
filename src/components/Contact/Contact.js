import { useState } from 'react'
import "./contact.css"
import Submit from '../General/Buttons/Submit'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    return (
        <section className='contact'>
            <div className='container'>
                <h2>Contact Us</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='name'>
                        Your Name:
                        <input type="text" placeholder='Ex: Ahmed' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label htmlFor='email'>
                        Your Email:
                        <input type="email" placeholder='Ex: ahmed@gmail.com' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor='phone'>
                        Your Phone Number:
                        <input type="text" placeholder='Ex: +123-456-7890' id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <label htmlFor='subject'>
                        Subject:
                        <input type="text" placeholder='Ex: marketing' id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </label>
                    <label htmlFor='message'>
                        Message:
                        <textarea id="message" placeholder='Your Message' maxLength="500" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </label>
                    <Submit variant="white" click={() => { 
                        console.log({name, email, phone, subject, message })
                        setName("")
                        setEmail("")
                        setPhone("")
                        setSubject("")
                        setMessage("")
                    }} />
                </form>
            </div>
        </section>
    )
}

export default Contact