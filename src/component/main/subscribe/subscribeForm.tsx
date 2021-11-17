import React from 'react';
import styles from './style/style.module.scss';

const SubscribeForm:React.FC = () => {
    return (
        <form className={styles.form} action="#">
            <fieldset>
                <legend className={styles.formLegend}>subscribe <span
                    className={styles.formLegend__sub}>for our newletter and promotion</span>
                </legend>
                <div className={styles.formBoxInputButton}>
                    <label htmlFor="email-sub"/>
                    <input className={styles.formInput} id="email-sub" type="email"
                           placeholder="Enter Your Email"/>
                    <button className={styles.formButton} type="button">Subscribe</button>
                </div>
            </fieldset>
        </form>
    );
};

export default SubscribeForm;
