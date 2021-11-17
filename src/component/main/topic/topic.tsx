import React from 'react';
import styles from './style/style.module.scss';
interface TopicProps{
    text:string;
}
const Topic :React.FC<TopicProps>= ({text}) => {
    return (
        <section className={styles.topic}>
            <div className={styles.container}>
                <h1 className={styles.heading}>{text}</h1>
            </div>
        </section>
    );
};

export default Topic;
