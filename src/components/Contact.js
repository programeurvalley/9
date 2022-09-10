import React, { useState } from 'react'

// Assets
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

// Style
import '../styles/Contact.css'

export default function Contact() {

    const [feedback , setFeedBack] = useState({
        name:'' ,
        email: '',
        para: ''
    })
    
    function ShowCns(e){
        e.preventDefault();
        console.log(feedback);
    }

    return (
            <footer>
                <div className="container" onSubmit={ShowCns}>
                    <div className="contact-info" onSubmit={ShowCns}>
                    <h2>Contact info</h2>
                    <div className="info">
                        <FiPhoneCall size={'1.5rem'}  className='icon-icon' style={{marginRight: 13}} />
                        <p>+1 (234) 567-8910</p>
                    </div>
                    <div className="info">
                        <FiMail size={'1.5rem'}  className='icon-icon' style={{marginRight: 13}} />
                        <p>contact@yourmail.com</p>
                    </div>
                    <div className="info">
                        <IoLocationOutline size={'2.3rem'}  className='icon-icon' style={{marginRight: 10}} />
                        <p>203, Evanto Labs, Behind Alis Street , Australia</p>
                    </div>
                    <div className="info">
                        <a href='https://www.google.com/' >
                            <AiFillFacebook size={'2rem'}  className='icon-icon'/>
                        </a>
                        <a href='https://www.google.com/' >
                            <AiFillTwitterCircle size={'2rem'}  className='icon-icon'/>
                        </a>
                        <a href='https://www.google.com/' >
                            <AiFillInstagram size={'2rem'}  className='icon-icon'/>
                        </a>
                        <a href='https://www.google.com/' >
                            <AiFillYoutube size={'2rem'}  className='icon-icon'/>
                        </a>
                    </div>
                    </div>
            
                    <div className="form" >
                            <form onSubmit={ShowCns} >
                                <div className="input-container">
                                <input
                                type="text"
                                className="field"
                                placeholder="Enter your name"
                                id="name"
                                name="name"
                                value={feedback.name}
                                onChange={(e) => setFeedBack({...feedback , name : e.target.value })} 
                                />
                                <label htmlFor="name"> Enter your name</label>
                            </div>
                            <div className="input-container">
                                <input
                                type="email"
                                className="field"
                                placeholder="Enter a valid email adress"
                                id="email"
                                name="email"
                                value={feedback.email}
                                onChange={(e) => setFeedBack({...feedback , email : e.target.value })} 
                                />
                                <label htmlFor="email"> Enter a valid email adress</label>
                            </div>
                            <div className="input-container msg-container">
                                <textarea
                                placeholder="Enter your message"
                                className="field"
                                rows="8"
                                id="comment"
                                value={feedback.para}
                                onChange={(e) => setFeedBack({...feedback , para : e.target.value})} 
                                ></textarea>
                                <label htmlFor="comment" className="msg-label"> Enter your message</label>
                            </div>
                            <div>
                            <input
                                type="submit"
                                className="field submit"
                                value="SUBMIT"
                                id="submit"
                            />
                            </div>
                        </form>
                    </div>
                </div>
            </footer>
    )
}
