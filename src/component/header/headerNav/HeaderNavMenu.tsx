import React from 'react';
import {HeaderNavMenuProps} from '../type/type';
import styles from './style/style.module.scss';

const HeaderNavMenu:React.FC<HeaderNavMenuProps>= (props) => {
    const {menuItem} = props;

    return (
        <ul>
            {
                menuItem.map((item, index) =>
                    (
                        <li className={styles.navigationItem} key={index}>
                            <a className={styles.navigationItem_link} href="/#">{item.title}</a>

                            <ul className={styles.navigationItem_subList}>
                                {item.subTitle.map((subTitle, index)=>
                                    (
                                        <li className={styles.navigationItem_subItem} key={index}>
                                            <a className={styles.navigationItem_subItemLink} href="/#">{subTitle.title}</a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </li>
                    )
                )
            }
        </ul>
    );
};

export default HeaderNavMenu;
