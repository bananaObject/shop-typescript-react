import React from 'react';
import SvgSelector from '../../../SvgSelector';
import {CatalogItemProps} from '../../../type/main/catalogTypes';
import {useAction} from '../../../../hooks/useAction';
import styles from './style/style.module.scss';

const CatalogListItem: React.FC<CatalogItemProps> = ({item}) => {
    const {img, heading, text, price} = item;

    const {addProductInCart} = useAction();

    return (
        <li className={styles.item}>
            <div className={styles.itemOverlay}>
                <img className={styles.itemImg} src={img.src} alt={img.alt} width={img.width} height={img.height}/>
                <button className={styles.itemButton} type="button" onClick={() => addProductInCart(item)}>

                    < //TODO исправить класс на модуль
                        SvgSelector id={'catalog'} className={styles.itemButton_svg}
                    />
                    Add to Cart
                </button>
            </div>
            <div className={styles.itemInfo}>
                <h3 className={styles.itemHeading}>{heading}</h3>
                <p className={styles.itemText}>{text}</p>
                <p className={styles.itemPrice}>${price}</p>
            </div>
        </li>
    );
};

export default CatalogListItem;
