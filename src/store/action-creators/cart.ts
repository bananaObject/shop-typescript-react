import {CartAction, CartActionTypes} from '../types/cart';
import {ICatalogItem} from '../types/catalogItem';


export const addProductInCart = (id:ICatalogItem) :CartAction=> {
    return {type: CartActionTypes.ADD_PRODUCT_CART, payload: id};
};

export const deleteProductInCart = (id:number) :CartAction=> {
    return {type: CartActionTypes.DELETE_PRODUCT_CART, payload: id};
};


export const deleteAllProductInCart = () :CartAction=> {
    return {type: CartActionTypes.DELETE_ALL_PRODUCT_CART};
};
