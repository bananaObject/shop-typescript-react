export interface ICatalogItem{
    'id': number,
    'img': {
        src: string,
        width:string,
        height:string,
        alt: string
    },
    'heading': string,
    'text': string,
    'price': number
}

export interface CatalogState {
    items:ICatalogItem[],
    error:null | string,
    loading:boolean,
    page:number,
    limit:number,
    maxPage:number
}


export enum CatalogItemActionTypes {
    FETCH_CATALOG = 'FETCH_CATALOG',
    FETCH_CATALOG_MAX_PAGE = 'FETCH_CATALOG_MAX_PAGE',
    FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS',
    FETCH_CATALOG_ERROR = 'FETCH_CATALOG_ERROR',
    SET_CATALOG_PAGE = 'SET_CATALOG_PAGE'
}

export type CatalogAction = FetchCatalogAction | FetchCatalogSuccessAction | FetchCatalogErrorAction | SetCatalogPageAction | FetchCatalogMaxPageAction

interface FetchCatalogAction{
    type:CatalogItemActionTypes.FETCH_CATALOG;
}

interface FetchCatalogMaxPageAction{
    type:CatalogItemActionTypes.FETCH_CATALOG_MAX_PAGE;
    payload: { maxPage: number,limit:number};
}
interface FetchCatalogSuccessAction{
    type:CatalogItemActionTypes.FETCH_CATALOG_SUCCESS;
    payload: ICatalogItem[];
}
interface FetchCatalogErrorAction{
    type:CatalogItemActionTypes.FETCH_CATALOG_ERROR;
    payload: string;
}

interface SetCatalogPageAction{
    type:CatalogItemActionTypes.SET_CATALOG_PAGE;
    payload: number;
}


