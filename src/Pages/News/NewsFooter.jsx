import React from 'react'
import '../News/News.css'
import logo from './../../../src/assets/Images/LOGO (3).svg'
import socl from './../../../src/assets/Images/Group 5 (1).svg'
import socl1 from './../../../src/assets/Images/Group 11.svg'
import socl2 from './../../../src/assets/Images/Group 10 (1).svg'
import socl3 from './../../../src/assets/Images/Group 9.svg'
const NewsFooter = () => {
  return (
    <footer>
        <div className='f_cont'>
            <div>
                <img style={{width: "68px"}} src={logo} alt="" />
                <p style={{width: "350px", marginTop: "15px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <br/>
                <p>@Lorem</p>
            </div>
            <div className='f_box'>
                <div style={{width: "89px"}}>
                    <p>About us</p>
                    <br/>
                    <p>Zeux</p>
                    <p>Portfolio</p>
                    <p>Careers</p>
                    <p>Contact us</p>
                </div>
                <div>
                    <p>Contact us</p>
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <br/>
                    <p>+908 89097 890</p>
                </div>
            </div>
            <div className='f_img'>
                <img src={socl} alt="" />
                <img src={socl1} alt="" />
                <img src={socl2} alt="" />
                <img src={socl3} alt="" />                
            </div>
        </div>
        <div className='f_line'></div>
        <p style={{margin: "29px 0px", textAlign: "center"}} >Copyright ® 2021 Lorem All rights Rcerved</p>
    </footer>
  )
}

export default NewsFooter