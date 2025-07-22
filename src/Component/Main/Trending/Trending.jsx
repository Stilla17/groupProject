import React from 'react'
import styles from '../../Main/Trending/Trending.module.css'
import poster from './../../../assets/Images/Rectangle 23.svg'
import poster1 from 'src/assets/Images/Rectangle 24.svg'
import poster2 from 'src/assets/Images/Rectangle 25.svg'
import poster3 from 'src/assets/Images/Rectangle 26.svg'

const Trending = () => {
    return (
        <main>
            <div className={styles}>
                <section>
                    <div className={styles}>
                        <p className={styles.main_text}>Currently Trending Games</p>
                        <button className={styles.main_btn}>SEE ALL</button>
                    </div>
                    <div className={styles}>
                        <div className={styles}>
                            <div>
                                <img src={poster} alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p className={styles}>40 Followers</p>
                            </div>
                        </div>
                        <div className={styles}>
                            <div>
                                <img src={poster1} alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p className={styles}>40 Followers</p>
                            </div>
                        </div>
                        <div className={styles}>
                            <div>
                                <img src={poster2} alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p className={styles}>40 Followers</p>
                            </div>
                        </div>
                        <div className={styles}>
                            <div>
                                <img src={poster3} alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p className={styles}>40 Followers</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Trending