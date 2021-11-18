import React from 'react';
import SvgSelector, {TypeSvgSelectorId} from '../../SvgSelector';
import styles from './style/style.module.scss';

export interface InfoItemProps {
    logo: TypeSvgSelectorId,
    heading: string,
    text: string,
}

const InfoItem: React.FC<InfoItemProps> = (props) => {
    const {logo, text, heading} = props;
    return (
        <li className={styles.item}>
            <SvgSelector id={logo} className={styles.itemSvg}/>
            <h3 className={styles.itemHeading}>{heading}</h3>
            <p className={styles.itemText}>{text}</p>
        </li>
    );
};

export default InfoItem;
