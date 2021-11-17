import React from 'react';
import {CategoriesItemProps} from '../../type/main/categoriesTypes';
import styles from './style/styles.module.scss';

const CategoriesItem :React.FC<CategoriesItemProps>= (props) => {
    const {heading, categories, text} = props;

    return (
        <li className={styles[`item__${categories}`]}>
            <a className={styles.itemLink} href="/product">
                <p className={styles.itemText}>{text}</p>
                <h3 className={styles.itemHeading}>{heading}</h3>
            </a>
        </li>
    );
};

export default CategoriesItem;
