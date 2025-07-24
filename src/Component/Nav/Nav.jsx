import React from 'react'
import img from "../../assets/LOGO.svg"
import "../Nav/Nav.css"

const Nav = () => {
    return (
        <div className="container">
            <nav>
                <div>
                    <img src={img} alt="Img" />
                </div>
                <div className='bigest'>
                    <ul className='ul'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                    <button className='btn1'>Contact us</button>
                </div>
            </nav >
        </div >
    )
}

export default Nav;
