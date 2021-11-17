import {RootState} from '../reducers';

export const sumMoneyCartSelector = (state:RootState) :number=> {
    const {countProductCart, productInfo} = state.cart;
    let sum = 0;

    productInfo.forEach(value => {
        const {id, price} = value;
        sum += price * countProductCart[id];
    });
    return sum;
};
