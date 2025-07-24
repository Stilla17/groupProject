import React from 'react'
import img from "../../assets/joystick.png"
import "../Header/header.css"
import Nav from '../Nav/Nav'
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Nav />
          <div className="header-wrapper">
            <div className="header-wrapper__content">
              <a href="#" className="header__link">3D game Dev </a>
              <h1 className="header__title">Work that we <br /> produce for our <br /> clients</h1>
              <p className="header__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              <button className="header__btn">Get more details</button>
            </div>
            <div className="header-wrapper__img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header


