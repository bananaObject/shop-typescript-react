import React from 'react';
import SubscribeForm from './subscribeForm';
import SubscribeQuote from './subscribeQuote';
import styles from './style/style.module.scss';

const Subscribe: React.FC = () => {
    return (
        <section className={styles.subscribe}>
            <h2 hidden>Subscribe</h2>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <SubscribeQuote/>
                </li>
                <li className={styles.item}>
                    <SubscribeForm/>
                </li>
            </ul>
        </section>
    );
};

export default Subscribe;
