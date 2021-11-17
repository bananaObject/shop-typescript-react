import React from 'react';
import SvgSelector from '../../SvgSelector';
import styles from './style/style.module.scss';
import {FooterListItemProps} from '../type/type';



const FooterListItem:React.FC<FooterListItemProps> = ({network}) => {
    return (
        <li className={styles.itemNetwork}>
            <a className={styles.link} href="#">
                <SvgSelector id={network} className={network === 'instagram'? styles.svg__inst : styles.svg}/>
            </a>
        </li>
    );
};

export default FooterListItem;
