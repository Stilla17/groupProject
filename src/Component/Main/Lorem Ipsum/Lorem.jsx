import React from 'react'
import styles from '../Lorem Ipsum/Lorem.module.css'
import spidey from './../../../assets/Images/spiderman.svg'
import dots from './../../../assets/Images/dots.svg'
import img from './../../../assets/Images/img 1.svg'
import img2 from './../../../assets/Images/img 2.svg'
import img3 from './../../../assets/Images/img 3.svg'
import img4 from './../../../assets/Images/img 4.svg'
import img5 from './../../../assets/Images/img 5.svg'
import img6 from './../../../assets/Images/img 6.svg'







const Lorem = () => {
  return (
        <div className={styles.container}>
            <div className={styles.Lorem_box}>
                <div className={styles.text_box}>
                    <p className={styles.Lorem_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className={styles.text_box2}>
                    <p className={styles.Lorem_text1}>Lorem Ipsum</p>
                    <p className={styles.Lorem_text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className={styles.Lorem_img}>
                    <img src={spidey} className={styles.spidey} alt="" />
                    <img className={styles.dots} src={dots} alt="" />
                </div>
            </div>
            <div className={styles.Lorem_box2}></div>
        </div>
  )
}

export default Lorem