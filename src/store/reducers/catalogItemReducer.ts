import {CatalogAction, CatalogItemActionTypes, CatalogState} from '../types/catalogItem';

const initialState: CatalogState = {
    items:[],
    error: null,
    loading:false,
    page: 1,
    limit: 6,
    maxPage:0
};

export const catalogItemReducer = (state:CatalogState = initialState, action:CatalogAction):CatalogState=>{
    switch (action.type) {
        case CatalogItemActionTypes.FETCH_CATALOG:
            return {...state, loading: true};
        case CatalogItemActionTypes.FETCH_CATALOG_SUCCESS:
            return {...state, loading: false, items: action.payload};
        case CatalogItemActionTypes.FETCH_CATALOG_ERROR:
            return {...state, loading: false, error: action.payload};
        case CatalogItemActionTypes.FETCH_CATALOG_MAX_PAGE:
            return {...state, maxPage: action.payload.maxPage,limit:action.payload.limit};
        case CatalogItemActionTypes.SET_CATALOG_PAGE:
            return {...state, page: action.payload};
        default:
            return state;
    }
};
