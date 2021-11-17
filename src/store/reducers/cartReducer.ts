import {CartAction, CartActionTypes, CartState} from '../types/cart';

const initialState: CartState = {
    productInfo: [],
    countProductCart: {}
};

export const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT_CART: {
            const {id}= action.payload;

            if (state.countProductCart[id]) {
                return {
                    ...state,
                    countProductCart: {
                        ...state.countProductCart,
                        [id]: state.countProductCart[id] + 1
                    }
                };
            }
            return {
                productInfo: [...state.productInfo, action.payload],
                countProductCart: {...state.countProductCart, [id]: 1}
            };
        }case CartActionTypes.DELETE_PRODUCT_CART: {
            const copy = state.countProductCart;
            delete copy[action.payload];

            return {
                productInfo: state.productInfo.filter(item => item.id !== action.payload),
                countProductCart: copy
            };
        }
        case CartActionTypes.DELETE_ALL_PRODUCT_CART:
            return {countProductCart: {}, productInfo: []};
        default:
            return state;
    }
};
