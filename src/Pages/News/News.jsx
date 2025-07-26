import React from 'react'
import '../News/News.css'
import logo from './../../../src/assets/Images/LOGO (3).svg'
import lupa from './../../../src/assets/Images/search 1.svg'
const News = () => {
  return (
    <header>
        <div className='container'>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='nav_box'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>News</a></li>
                    </ul>
                    <button className='nav_btn'>Contact us</button>
                </div>
            </nav>
            <div className='hdr_wrapper'>
                <p>Home  -  <span className='span'>News</span></p>
                <p className='hdr_text'>Lorem Ipsum is simply dummy text of the printing and.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <div className='inp'>
                <input type="text" placeholder='Search' className='input'/>
                <img className='lupa' src={lupa} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default News