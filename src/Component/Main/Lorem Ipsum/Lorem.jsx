import React from 'react'
import styles from '../Lorem Ipsum/Lorem.module.css'
import spidey from './../../../assets/Images/spiderman.svg'
import dots from './../../../assets/Images/dots.svg'








const Lorem = () => {
  return (
    <>
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
        </div>
    </>        
  )
}

export default Lorem