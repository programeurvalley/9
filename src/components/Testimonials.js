import React from "react";

// Assets
import W1 from '../assests/w1.jpg'
import DS1 from '../assests/ds1.jpg'
import HG from '../assests/hgghgh.jpg'
import GG from '../assests/gggg.jpg'

// Style 
import '../styles/Testimonials.css'

export default function Testimonials(){
    const obj = [{
        id : 0 ,
        img : W1,
        para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.',
        name : 'Nat Reynolds', 
        job : 'chief accoutant'
    }, {
        id : 1 ,
        img : DS1,
        para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.',
        name : 'Celia Almeda', 
        job : 'Secretary'
    }, {
        id : 2 ,
        img : HG,
        para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.',
        name : 'Bob Robert', 
        job : 'Sales manager'
    }, {
        id : 3 ,
        img : GG,
        para : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.',
        name : 'Mattie Smith', 
        job : 'Accoutant-audithor'
    }]
    return(
    <section className="feedback">
        <h2>TESTIMONIALS</h2>
        <h1>What Clients Say</h1>
        <h2>
            We place huge value on strong relationships and have seen the benifit
            they bring to our business. Customer feedback is vital in helping us to
            get it right.
        </h2>
        <div className="users">
            {obj.map(e => 
                    <div className="user" key={e.id}>
                        <div className="img-container floating">
                            <img src={e.img} alt="chief.png" />
                        </div>
                        <p className="quote">
                            {e.para}
                        </p>
                        <h2>{e.name}</h2>
                        <p>{e.job}</p>
                    </div>
                )}
        </div>
        </section>
    )
}