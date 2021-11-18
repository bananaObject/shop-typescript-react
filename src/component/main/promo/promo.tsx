import React from 'react';
import styles from './style/style.module.scss';

const Promo:React.FC= () => {
    return (
        <section className={styles.promo}>
            <img className={styles.img} src={'/images/man.jpg'} alt="promo-man" width="800" height="765"/>
                <div className={styles.headingWrapper}>
                    <h1 className={styles.heading}>The brand <span className={styles.subHeading}>of luxerious <span
                        className={styles.subHeadingPink}>fashion</span></span></h1>
                </div>
        </section>
    );
};

export default Promo;
