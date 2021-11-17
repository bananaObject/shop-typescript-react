import React from 'react';
import InfoItem from './infoItem';
import {configFunc} from './configuration/configuration';
import styles from './style/style.module.scss';

const Info: React.FC = () => {
    const items = configFunc();

    return (
        <section className={styles.info}>
            <h2 hidden>Info</h2>
            <ul className={styles.list}>
                {items.map((item, index) => {
                    const {logo, heading, text} = item;
                    return <InfoItem logo={logo} text={text} heading={heading} key={index}/>;
                })}
            </ul>
        </section>
    );
};

export default Info;
