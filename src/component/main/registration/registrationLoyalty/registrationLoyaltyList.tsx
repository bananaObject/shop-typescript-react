import React from 'react';
import styles from './style/style.module.scss';

interface RegistrationLoyaltyListProps {
    arrayLoyaltyText: Array<string>
}

const RegistrationLoyaltyList: React.FC<RegistrationLoyaltyListProps> = ({arrayLoyaltyText}) => {
    return (
        <ul className={styles.loyaltyList}>
            {
                arrayLoyaltyText.map((text, index) =>
                    <li className={styles.loyaltyItem} key={index}>
                        <p className={styles.loyaltyText}>{text}</p>
                    </li>)
            }
        </ul>
    );
};

export default RegistrationLoyaltyList;
