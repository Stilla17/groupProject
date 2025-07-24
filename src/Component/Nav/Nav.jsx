import React from 'react'
import img from "../../assets/LOGO.svg"
import "../Nav/Nav.css"

const Nav = () => {
    return (
        <div>
            <header className='header'>
                <section>
                    <div className="container">
                        <div className='begest'>
                            <div className='father'>
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
                                </div>
                                <button className='btn1'>Contact us</button>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Nav;
