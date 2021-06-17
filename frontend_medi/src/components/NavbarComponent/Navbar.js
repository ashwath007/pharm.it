import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <h3 className="company__brand">Pharm.it</h3>
            </div>
            <div className="navbar__buttons">
                {/* <button className="product__button">Products</button>
                <button className="product__button">Patners</button> */}
            </div>
        </nav>
    )
}

export default Navbar
