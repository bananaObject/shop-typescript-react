import React from 'react';
import RegistrationLoyaltyList from './registrationLoyaltyList';
import styles from './style/style.module.scss';
import {RegistrationLoyaltyConfigFunc} from '../configuration/configuration';



const RegistrationLoyalty: React.FC = () => {
    const arrayLoyalty = RegistrationLoyaltyConfigFunc();

    return (
        <aside className={styles.loyalty}>
            <p className={styles.loyaltyText__heading}>loyalty has its perks</p>
            <p className={styles.loyaltyText}>
                Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as
                soon as you join:
            </p>

            <RegistrationLoyaltyList arrayLoyaltyText={arrayLoyalty}/>
        </aside>
    );
};

export default RegistrationLoyalty;
