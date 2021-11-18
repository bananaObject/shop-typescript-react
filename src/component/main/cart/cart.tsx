import React from 'react';
import CartBox from './cartBox/cartBox';
import CartOrder from './cartOrder/cartOrder';
import styles from './style/style.module.scss';
const Cart :React.FC= () => {
    return (
        <section className={styles.cart}>
            <h2 hidden={true}>Cart</h2>
            <CartBox/>
            <CartOrder/>
        </section>
    );
};

export default Cart;
