import {ICatalogItem} from './catalogItem';

export interface CartState{
    productInfo:Array<ICatalogItem>
    countProductCart:{
        [key: number] : number
    }
}


export enum CartActionTypes {
    ADD_PRODUCT_CART = 'ADD_CART',
    DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART',
    DELETE_ALL_PRODUCT_CART = 'DELETE_ALL_PRODUCT_CART'
}

export type CartAction = CartAddProductAction | CartDeleteProductAction | CartDeleteAllProductAction

interface CartAddProductAction {
    type:CartActionTypes.ADD_PRODUCT_CART;
    payload:ICatalogItem;
}

interface CartDeleteProductAction {
    type:CartActionTypes.DELETE_PRODUCT_CART;
    payload:number;
}

interface CartDeleteAllProductAction {
    type:CartActionTypes.DELETE_ALL_PRODUCT_CART;
}
