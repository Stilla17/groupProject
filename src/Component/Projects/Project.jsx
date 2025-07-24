import React from 'react'
import img from '../../assets/Rectangle 15.png'
import img1 from '../../assets/Rectangle 16.png'
import img2 from '../../assets/Rectangle 17.png'
import img3 from '../../assets/Rectangle 18.png'
import img4 from '../../assets/Rectangle 19.png'
import img5 from '../../assets/Rectangle 20.png'
import "./Project.css"

const Project = () => {
    return (
        <div>
            <section className="projects-section">
                <div className="container">
                    <h2 className="title">Our Recent Projects</h2>
                    <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="projects-grid">
                        <img src={img} alt="Img" />
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="Img1" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                    <button className='btn'>See all</button>
                    <div className='row'>
                        <div>
                            <h1 className='title'>Stay in the loop</h1>
                            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, iure!</p>
                        </div>
                        <div className='for'>

                            <input className='input' type="text" placeholder='Enter email address' name="" id="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project;
