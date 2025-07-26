import React from 'react'
import '../News/News.css'
import poster from './../../assets/Images/Rectangle 274.svg'
import poster1 from './../../assets/Images/Rectangle 274 (1).svg'
//import Buttons from './Pages/News/Buttons'
import image from './../../assets/Images/Rectangle 276.svg'
import image1 from './../../assets/Images/Rectangle 276 (1).svg'
import image2 from './../../assets/Images/Rectangle 276 (2).svg'
import image3 from './../../assets/Images/Rectangle 276 (3).svg'
import image4 from './../../assets/Images/Rectangle 276 (4).svg'
import image5 from './../../assets/Images/Rectangle 276 (5).svg'
import image6 from './../../assets/Images/Rectangle 276 (6).svg'
const NewsMain = () => {
    return (
        <main>
            <div className='container'>
                <section className='main_wrapper'>
                    <div className='main_wrapper_left'>
                        <div className='main_card'>
                            <img src={poster} alt="" />
                            <div className='main_duo'>
                                <button className='main_btn'>John smash</button>
                                <p>.5min</p>
                            </div>
                            <p className='main_text'>Lorem Ipsum is simply dummy text dummy text </p>
                            <p style={{width: "529px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, <br /> <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className='line'></div>
                        <div className='main_card'>
                            <img src={poster1} alt="" />
                            <div className='main_duo'>
                                <button className='main_btn'>John smash</button>
                                <p>.5min</p>
                            </div>
                            <p className='main_text'>Lorem Ipsum is simply dummy text dummy text </p>
                            <p style={{width: "529px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                        </div>
                    </div>
                    <div className='main_wrapper_right'>
                        <div className='main_card1'>
                            <div><img src={image} alt="" /></div>
                            <div>
                                <div className='main_duo'>
                                    <button className='main_btn1'>John smash</button>
                                    <p>.5min</p>
                                </div>
                                <p className='main_text1'>Lorem Ipsum is simply dummy text dummy text ? </p>
                            </div>                           
                        </div>
                        <div className='main_card1'>
                            <div><img src={image1} alt="" /></div>
                            <div>
                                <div className='main_duo'>
                                    <button className='main_btn2'>John smash</button>
                                    <p>.5min</p>
                                </div>
                                <p className='main_text1'>Lorem Ipsum is simply dummy text dummy text ? </p>
                            </div>                           
                        </div>
                        <div className='main_card1'>
                            <div><img src={image2} alt="" /></div>
                            <div>
                                <div className='main_duo'>
                                    <button className='main_btn3'>John smash</button>
                                    <p>.5min</p>
                                </div>
                                <p className='main_text1'>Lorem Ipsum is simply dummy text dummy text ? </p>
                            </div>                           
                        </div>
                        <div className='main_card1'>
                            <div><img src={image3} alt="" /></div>
                            <div>
                                <div className='main_duo'>
                                    <button className='main_btn4'>John smash</button>
                                    <p>.5min</p>
                                </div>
                                <p className='main_text1'>Lorem Ipsum is simply dummy text dummy text ? </p>
                            </div>                           
                        </div>
                        <div className='main_card1'>
                            <div><img src={image4} alt="" /></div>
                            <div>
                                <div className='main_duo'>
                                    <button className='main_btn5'>John smash</button>
                                    <p>.5min</p>
                                </div>
                                <p className='main_text1'>Lorem Ipsum is simply dummy text dummy text ? </p>
                            </div>                           
                        </div>
                        <div className='main_card1'>
                            <div><img src={image5} alt="" /></div>
                            <div>
                                <div className='main_duo'>
                                    <button className='main_btn6'>John smash</button>
                                    <p>.5min</p>
                                </div>
                                <p className='main_text1'>Lorem Ipsum is simply dummy text dummy text ? </p>
                            </div>                           
                        </div>
                        <div className='main_card1'>
                            <div><img src={image6} alt="" /></div>
                            <div>
                                <div className='main_duo'>
                                    <button className='main_btn7'>John smash</button>
                                    <p>.5min</p>
                                </div>
                                <p className='main_text1'>Lorem Ipsum is simply dummy text dummy text ? </p>
                            </div>                           
                        </div>
                    </div>
                </section>
                <section className='main_sec'>
                    <p className='main_text'>Lorem Ipsum</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className='main_box'>
                        <div>
                            <p style={{fontSize: "30px", fontWeight: "500", color: "white"}}>Stay in the loop</p>
                            <p style={{width: "636px"}}>Subscribe to receive the latest news and updates about TDA.<br />
                            We promise not to spam you! </p>
                        </div>
                        <div className='main_inpBox'>
                            <input className='main_inp' type="text" placeholder='Enter email address'/>
                            <button className='main_but'>Continue</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default NewsMain