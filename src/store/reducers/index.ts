import {combineReducers} from 'redux';
import {headerNavReducer} from './headerNavReducer';
import {catalogItemReducer} from './catalogItemReducer';
import {cartReducer} from './cartReducer';

export const rootReducer = combineReducers({
    headerNav:headerNavReducer,
    catalog:catalogItemReducer,
    cart:cartReducer
});


export type RootState = ReturnType<typeof rootReducer>;
