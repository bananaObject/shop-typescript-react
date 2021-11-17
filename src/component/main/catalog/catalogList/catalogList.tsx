import React from 'react';
import CatalogListItem from './catalogListItem';
import {ICatalogItem} from '../../../../store/types/catalogItem';
import styles from './style/style.module.scss';

interface CatalogListProps{
    items: ICatalogItem[];
}

const CatalogList:React.FC<CatalogListProps> = (props) => {
    const {items} = props;

    return (
        <ul className={styles.list}>
            {
                items.map((item) => {
                    return (
                        <CatalogListItem item={item} key={item.id}/>
                    );
                })
            }
        </ul>
    );
};

export default CatalogList;
