import React from 'react';
import photoWoman from '../../../assets/images/photo-woman.png';
import styles from './style/style.module.scss';

const SubscribeQuote:React.FC = () => {
    return (
        <>
            <img src={photoWoman} alt="subscribe-woman" width="96" height="96"/>
            <span className={styles.itemQuote}>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                <span className={styles.itemQuote__italic}> a pulvinar purus condimentum“</span></span>
        </>
    );
};

export default SubscribeQuote;
