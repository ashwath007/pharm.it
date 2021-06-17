import React from 'react'
import './partner.css'
import onemg from '../../Assets/onemg.png'
import netmeds from '../../Assets/netmeds.jpeg'
import medilife from '../../Assets/medilife.png'
import Appolo from '../../Assets/Appolo.png'

function Partner() {
    const partners= [
        {
            id:1,
            img:onemg,
            name:"1.1mg"
        },
        {
            id:2,
            img:netmeds,
            name:"Natmeds"
        },
        {
            id:3,
            img:medilife,
            name:"Medilife"
        }
    ]
    return (
        <>
        <h1 className="partner__text">Get Medicines Compared from</h1>
        <div className="partner">
                {partners.map(part => (
                        <img key={part.id}   src={part.img} width="200px" height="200px" alt={part.name}/>
                ))}
        </div>

        <footer className="foot">
            <p>&#169; SE BATCH 10</p>
        </footer>
        </>
    )
}

export default Partner
