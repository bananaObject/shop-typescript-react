import {CatalogAction, CatalogItemActionTypes, ICatalogItem} from '../types/catalogItem';
import {Dispatch} from 'redux';
import axios, {AxiosResponse} from 'axios';

type sort =  'old' | 'new' | 'low price' | 'big price';

export type IParams = {
    size?: string;
    price?: string;
    page?: string;
    sort?:sort
};

export const fetchCatalog = (limit = 6, params: IParams = {}) => {
    return async (dispatch: Dispatch<CatalogAction>): Promise<void> => {
        try {
            dispatch({type: CatalogItemActionTypes.FETCH_CATALOG});

            const {sort, price, size, page, ...paramsPage} = params;
            const pageForFetch = Number(page) || 1;

            let sortObj;
            let priceUser;
            let sizeArray;
            if (sort) {
                if (sort === 'big price') {
                    sortObj = {_sort: 'price', _order: 'DESC'};
                } else if (sort === 'low price') {
                    sortObj = {_sort: 'price', _order: 'ASC'};
                }
            }
            if (price) {
                priceUser = {price_gte: 0, price_lte: +price};
            }
            if (size){
                sizeArray = size.split(',').reduce((acc, value) => ({...acc, [`size.${value}`]:true}), {});
            }

            const response = await axios.get('http://localhost:3100/catalogItems',
                {
                    params: {_page: pageForFetch, _limit: limit, ...paramsPage, ...sortObj, ...priceUser, ...sizeArray}
                });

            dispatch({type: CatalogItemActionTypes.FETCH_CATALOG_SUCCESS, payload: response.data});
            dispatch(setPageCatalog(pageForFetch));
        } catch (e) {
            //отправка ошибки
            dispatch({type: CatalogItemActionTypes.FETCH_CATALOG_ERROR, payload: 'Произошла ошибка загрузки каталога'});
        }
    };
};

export const fetchCatalogMaxPageCount = (limit = 6, params: IParams = {}) => {
    return async (dispatch: Dispatch<CatalogAction>): Promise<void> => {
        try {
            //Получение количество страниц для пагинации
            const {price, size} = params;
            console.log(params);

            let priceUser;
            let sizeUser;
            const sizeObj:{[key:string]:boolean} = {};
            if (price) {
                priceUser = {price_gte: 0, price_lte: +price};
            }
            if (size){
                sizeUser = size.split(',');
                sizeUser.forEach((value)=>{
                    sizeObj[`size.${value}`]= true;
                });
            }

            const maxPage: AxiosResponse<Array<ICatalogItem>> = await axios.get('http://localhost:3100/catalogItems',
                {params: {...sizeObj, ...priceUser,}}
            );
            dispatch({
                type: CatalogItemActionTypes.FETCH_CATALOG_MAX_PAGE, payload: {
                    maxPage: Math.ceil(maxPage.data.length / limit),
                    limit
                }
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const setPageCatalog = (page: number): CatalogAction => {
    return {type: CatalogItemActionTypes.SET_CATALOG_PAGE, payload: page};
};
