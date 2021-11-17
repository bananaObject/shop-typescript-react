import React from 'react';
import styles from './style/style.module.scss';

interface CartBoxButtonProps{
    text:string;
    func:()=> void;
}

const CartBoxButton: React.FC<CartBoxButtonProps>= ({text, func}) => {
    return (
        <button className={styles.button} type="button" onClick={func}>{text}</button>
    );
};

export default CartBoxButton;
