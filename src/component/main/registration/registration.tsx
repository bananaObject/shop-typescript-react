import React from 'react';
import RegistrationLoyalty from './registrationLoyalty/registrationLoyalty';
import RegistrationForm from './registrationForm';
import styles from './style/style.module.scss';
const Registration: React.FC= () => {
    return (
        <section className={styles.registration}>
            <h2 hidden>registration and loyalty</h2>
            <RegistrationForm/>
            <RegistrationLoyalty/>
        </section>
    );
};

export default Registration;
