import React, { useState } from 'react';
import "./css/contactcss.css";
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission and send the data to your backend or perform any other necessary actions
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="coontact-wraper " id='contact'>
            <div className="contact-card">
            <div className="border-line"/>
            <h1>Get in contact with us</h1>
            <h2> IT is this easy! </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            
           
            </div>

            <div className="contact-info">
                <h1>Horizons Devs</h1>
                <h2>Let's talk about everything</h2>

                <div className="iconos-container">
                    <a href="https://www.whatsapp.com/" target='_blank'><img ref={React.createRef()} src="https://img.icons8.com/ios/50/000000/whatsapp.png" alt="whatsapp"/></a>
                    <a href="https://www.instagram.com/horizonsdevs/" target='_blank'><img ref={React.createRef()} src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram"/></a>
                    <a href="https://www.tiktok.com" target='_blank'><img  ref={React.createRef()} src="https://img.icons8.com/ios/50/000000/tiktok.png" alt="tiktok"/></a>
                    <a href="https://www.facebook.com/" target='_blank'><img ref={React.createRef()} src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="facebook"/></a>
                </div>

                <p>Email: sales@horizonsdevs.com </p>
                <p>Phone: 123-456-7890</p>
                <p>123 Main Street, City, State, Country</p>
            </div>
        </div> 
    );
};

export default Contact;