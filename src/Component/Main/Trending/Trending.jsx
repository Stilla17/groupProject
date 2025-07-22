import React from 'react'
import styles from '../../Main/Trending/Trending.module.css'
import poster from './../../../assets/Images/Rectangle 23.svg'
import poster1 from './../../../assets/Images/Rectangle 24.svg'
import poster2 from './../../../assets/Images/Rectangle 25.svg'
import poster3 from './../../../assets/Images/Rectangle 26.svg'
import fire from './../../../assets/Icons/fire 1.svg'

const Trending = () => {
    return (
        <main>
            <div className={styles.container}>
                <section>
                    <div className={styles.main_box}>
                        <p className={styles.main_text}>Currently Trending Games</p>
                        <button className={styles.main_btn}>SEE ALL</button>
                    </div>
                    <div className={styles.main_wrapper}>
                        <div className={styles.card}>
                            <div>
                                <img src={poster} alt="" />
                            </div>
                            <div className={styles.follow}>
                                <img src={fire} alt="" />
                                <p className={styles.main_text2}>40 Followers</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={poster1} alt="" />
                            </div>
                            <div className={styles.follow}>
                                <img src={fire} alt="" />
                                <p className={styles.main_text2}>40 Followers</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={poster2} alt="" />
                            </div>
                            <div className={styles.follow}>
                                <img src={fire} alt="" />
                                <p className={styles.main_text2}>40 Followers</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={poster3} alt="" />
                            </div>
                            <div className={styles.follow}>
                                <img src={fire} alt="" />
                                <p className={styles.main_text2}>40 Followers</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Trending