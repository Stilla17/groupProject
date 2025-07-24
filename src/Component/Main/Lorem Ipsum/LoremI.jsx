import React from 'react'
import img from './../../../assets/Images/img 1.svg'
import img2 from './../../../assets/Images/img 2.svg'
import img3 from './../../../assets/Images/img 3.svg'
import img4 from './../../../assets/Images/img 4.svg'
import img5 from './../../../assets/Images/img 5.svg'
import img6 from './../../../assets/Images/img 6.svg'
import styles from '../Lorem Ipsum/Lorem.module.css'
import arrow from './../../../assets/Icons/arrow 2.svg'
//import backg from './../../../assets/Images/Rectangle 5.svg'


const LoremI = () => {
  return (
    <div className={styles.Lorem_box2}>
      <div className={styles.backg}>
      <div className={styles.container}>
        <div className={styles.Lorem_wrapper}>
          <p className={styles.Lorem_text1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className={styles.Lorem_wrapper2}>
          <div className={styles.Lorem_card}>
            <img src={img} alt="" />
            <p>Mobile Game Development</p>
            <img src={arrow} alt="" />
          </div>
          <div className={styles.Lorem_card}>
            <img src={img2} alt="" />
            <p>PC Game Development</p>
            <img src={arrow} alt="" />
          </div>
          <div className={styles.Lorem_card}>
            <img src={img3} alt="" />
            <p>PS4 Game Development</p>
            <img src={arrow} alt="" />
          </div>
          <div className={styles.Lorem_card}>
            <img src={img4} alt="" />
            <p>AR/VR Solutions</p>
            <img src={arrow} alt="" />
          </div>
          <div className={styles.Lorem_card}>
            <img src={img5} alt="" />
            <p>AR/ VR design</p>
            <img src={arrow} alt="" />
          </div>
          <div className={styles.Lorem_card}>
            <img src={img6} alt="" />
            <p>3D Modelings</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LoremI