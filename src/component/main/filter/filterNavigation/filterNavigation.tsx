import React from 'react';
import styles from './style/style.module.scss';
import { NavLink } from 'react-router-dom';
import { Location } from 'history';

const InputConfiguration = (): { name: string, items: string[] }[] => {
    return [
        {
            name: 'category',
            items: ['Accessories', 'Bags', 'Denim', 'Hoodies & Sweatshirts', 'Jackets & Coats', 'Polos', 'Shirts', 'Shoes', 'Sweaters & Knits', 'T-Shirts', 'Tanks']
        },
        {
            name: 'brand',
            items: ['Gucci'],
        },
        {
            name: 'designer',
            items: ['Alberto Pablo'],
        },
    ];
};


const FilterNavigation: React.FC= () => {
    const navItems = InputConfiguration();



    return (
        <nav className={styles.navigation}>
            <button className={styles.navigationButtonTitle}>
                <span className={styles.navigationButtonText}>FILTER</span>
                <svg className={styles.navigationButtonSvg} width="15" height="10" viewBox="0 0 15 10"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"/>
                </svg>
            </button>

            <ul className={styles.navigationList}>
                {navItems.map((value, index) => {
                    const {items,name} = value;
                    return (<li key={index}>
                        <button className={styles.navigationButtonCategory} >{name}</button>
                        <ul className={styles.navigationSublist}>
                            {items.map(((navLink) =>{
                                return (
                                    <li className={styles.navigationSubItem} key={navLink}>
                                        <NavLink className={styles.navigationLink} to={`/all-catalog?${name.toLowerCase()}=${navLink.toLowerCase()}`}>{navLink}</NavLink>
                                    </li>
                                );
                            }))}
                        </ul>
                    </li>);
                })}
            </ul>
        </nav>
    );
};

export default FilterNavigation;
