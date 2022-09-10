import React from "react";
import { useState } from "react";

// Assests
import logo from "../assests/logo.png";
import {AiFillFacebook , AiOutlineMenu , AiFillInstagram , AiFillTwitterSquare} from 'react-icons/ai';

// Style
import '../styles/Navbar.css';

export default function Navbar(){
        const [collapse , setCollapse] = useState(false);

        const handleClick = () => {
            setCollapse(!collapse);
        }

        return(
        <nav>
            <div className="navbar">
                <img src={logo} alt="logo.png" className="logo" />

                <ul className="socialMedia-list">
                    <li>
                    <a href="https://www.google.com/"><AiFillFacebook size={"2rem"} /></a>
                    </li>
                    <li>
                    <a href="https://www.google.com/"><AiFillTwitterSquare size={"2rem"} /></a>
                    </li>
                    <li>
                    <a href="https://www.google.com/"><AiFillInstagram size={"2rem"} /></a>
                    </li>

                </ul>

                <button className="btn-no-styling" onClick={handleClick}>
                    <AiOutlineMenu size={"2rem"} style={{marginLeft:30}} />
                </button>
            </div>

            {collapse ? <div className="bg-white text-center border-bottom-2 p-0" >
                <a href="https://www.google.com/" className="display-block p-20">About</a>
                <a href="https://www.google.com/" className="display-block p-20">Services</a>
                <a href="https://www.google.com/" className="display-block p-20">Support</a>
                <a href="https://www.google.com/" className="display-block p-20">Contact</a>
            </div> : <></>}
            
        </nav>
        );
}