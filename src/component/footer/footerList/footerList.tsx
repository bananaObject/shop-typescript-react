import React from 'react';
import FooterListItem from './footerListItem';
import styles from './style/style.module.scss';
import {networkArray} from '../type/type';



const FooterList:React.FC = () => {
    const socialNetworkArray: networkArray[] = ['facebook','instagram', 'pinterest', 'twitter'];

    return (
        <ul className={styles.listNetwork}>
            {socialNetworkArray.map((value, index) => <FooterListItem network={value} key={index}/>)}
        </ul>
    );
};

export default FooterList;
