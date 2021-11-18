import React from 'react';
import styles from './style/style.module.scss';

interface CatalogPaginationListProps{
    className: string;
    onClick?:()=>void
}
const CatalogPaginationItem :React.FC<CatalogPaginationListProps>= (props) => {
    const {children, className, onClick}= props;

    return (
        <li className={styles.item}>
            <button className={className}
                    onClick={onClick}>
                {children}
            </button>
        </li>
    );
};

export default CatalogPaginationItem;
