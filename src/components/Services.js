import React from "react";

// Assests
import {TiLockClosedOutline , TiGlobeOutline} from 'react-icons/ti'
import {BsCodeSlash} from 'react-icons/bs'
import {IoFileTrayStackedSharp} from 'react-icons/io5'

// Style 
import '../styles/Services.css'

export default function Services(){


    return(
            <div className="section services">
            <div className="section-content">
                <h1>Hosting solution with benifits.</h1>
                <p>
                Turn your ideas into reality with static . <br />
                With a lot of powerfull features , <br />
                we guarantee simplicity and clarity.
                </p>
                <div className="btn-container">
                <button className="green-btn">
                    <span className="btn-txt">Read more</span>
                </button>
                </div>
            </div>
            <div className="offers">
                <div className="offer">
                <TiLockClosedOutline  className="icon-icon" />
                <h1>SSL certifecate</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                    ea!
                </p>
                <a href="https://www.google.com/"><h2>MORE!</h2></a>
                </div>
                <div className="offer">
                <TiGlobeOutline className="icon-icon" />
                <h1>Personal Domain</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                    ea!
                </p>
                <a href="https://www.google.com/"><h2>MORE!</h2></a>
                </div>
                <div className="offer">
                <BsCodeSlash className="icon-icon" />
                <h1>Code Editor</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                    ea!
                </p>
                <a href="https://www.google.com/"><h2>MORE!</h2></a>
                </div>
                <div className="offer">
                <IoFileTrayStackedSharp className="icon-icon" />
                <h1>Media Storage</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                    ea!
                </p>
                <a href="https://www.google.com/"><h2>MORE!</h2></a>
                </div>
            </div>
            </div>)
} 