import React from 'react';
import {ICatalogItem} from '../../../../store/types/catalogItem';
import {useAction} from '../../../../hooks/useAction';
import SvgSelector from '../../../SvgSelector';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import styles from './style/style.module.scss';

interface CartBoxItemProps{
    product:ICatalogItem;
}

const CartBoxItem :React.FC<CartBoxItemProps>= ({product}) => {
    const {img, heading,price, id}=product;

    const {countProductCart} = useTypedSelector(state => state.cart);

    const countProduct = countProductCart[id];

    const {deleteProductInCart} = useAction();

    return (
        <li className={styles.item}>
            <SvgSelector id={'close'} onClick={() => deleteProductInCart(id)} className={styles.itemCloseSvg}/>
            <img src={img.src} alt="cart-product-2" className={styles.img} width="262"
                 height="306"/>
            <ul className={styles.subList}>
                <li className={styles.subItem_heading}><p>{heading}</p>
                </li>
                <li className={styles.subItem}><p>Price: <span
                    className={styles.subItem_value__red}>${price}</span></p></li>
                <li className={styles.subItem}><p>Color: <span
                    className={styles.subItem_value}>Red</span></p>
                </li>
                <li className={styles.subItem}><p>Size: <span className={styles.subItem_value}>Xl</span>
                </p></li>
                <li className={styles.subItem}><p>Quantity: <span
                    className={styles.subItem_value__border}>{countProduct}</span></p></li>
            </ul>
        </li>
    );
};

export default CartBoxItem;
