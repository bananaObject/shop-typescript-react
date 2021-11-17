import React from 'react';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {sumMoneyCartSelector} from '../../../../store/selectors/cart';
import CartOrderShippingForm from './cartOrderShippingForm';
import styles from './style/style.module.scss';

const CartOrder: React.FC = () => {
    const sum = useTypedSelector(sumMoneyCartSelector);
    return (
        <section className={styles.order}>
            <CartOrderShippingForm/>
            <section className={styles.orderCheckout}>
                <h3 hidden>Checkout</h3>
                <p className={styles.checkoutText}>sub total <span className={styles.checkoutText_value}>${sum}</span></p>
                <h3 className={styles.checkoutText__total}>grand total <span
                    className={styles.checkoutText_value__red}>{sum}</span></h3>
                <button className={styles.checkoutButton} type="button">proceed to checkout</button>
            </section>
        </section>
    );
};

export default CartOrder;
