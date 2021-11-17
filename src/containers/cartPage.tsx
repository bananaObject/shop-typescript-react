import React from 'react';
import Topic from '../component/main/topic/topic';
import Subscribe from '../component/main/subscribe/subscribe';
import Cart from '../component/main/cart/cart';

const CartPage :React.FC = () => {
    return (
        <main>
            <Topic text={'Shopping Cart'}/>
            <Cart/>
            <Subscribe/>
        </main>
    );
};

export default CartPage;
