import React from 'react';
import CartBoxButton from './cartBoxButton';
import {useAction} from '../../../../hooks/useAction';
import {useHistory} from 'react-router-dom';
import CartBoxItem from './cartBoxItem';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import styles from './style/style.module.scss';

const CartBox: React.FC = () => {
    const {deleteAllProductInCart} =useAction();
    const {productInfo} = useTypedSelector(state => state.cart);
    const history = useHistory();


    return (
        <section>
            <h3 hidden={true}>basket of goods</h3>
            <ul>
                {!productInfo.length && <div className={styles.cartEmpty}><h1 className={styles.cartEmpty_text}>cart empty</h1></div>}

                {
                    productInfo.map((item, index)=> <CartBoxItem product={item} key={index}/>)
                }
            </ul>

            <div className={styles.boxButtons}>
                <CartBoxButton text={'clear shopping cart'} func={deleteAllProductInCart}/>
                <CartBoxButton text={'continue shopping'} func={history.goBack}/>
            </div>
        </section>
    );
};

export default CartBox;
