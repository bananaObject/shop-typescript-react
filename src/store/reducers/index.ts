import {combineReducers} from 'redux';
import {headerNavReducer} from './headerNavReducer';

export const rootReducer = combineReducers({
    headerNav:headerNavReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
