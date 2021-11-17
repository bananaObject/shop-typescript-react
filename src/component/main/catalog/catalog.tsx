import React, {useEffect, useRef} from 'react';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {useAction} from '../../../hooks/useAction';
import CatalogList from './catalogList/catalogList';
import CatalogPagination from './catalogPagination/catalogPagination';
import {NavLink, useLocation} from 'react-router-dom';
import styles from './style/style.module.scss';
import * as queryString from 'querystring';

interface CatalogProps{
    pageLimit?:number
}

const Catalog: React.FC<CatalogProps> = ({pageLimit,children}) => {
    const {items} = useTypedSelector(state => state.catalog);
    const {fetchCatalog, fetchCatalogMaxPageCount} =  useAction();

    const {search, pathname} = useLocation();


    useEffect(()=>{
        const params = queryString.parse(search.slice(1));

        fetchCatalogMaxPageCount(pageLimit, params);
        fetchCatalog(pageLimit, params);
    },[search]);

    const ref = useRef<any>();

    const scroll=()=>{
        window.scrollTo(0, ref.current.offsetTop);
    };


    return (
        <section className={styles.catalog} ref={ref}>
            {children}

            <CatalogList items={items}/>

            {
                pathname !== '/all-catalog' ?
                    <NavLink to={'/all-catalog?page=1'}>
                        <button className={styles.button} type="button" >Browse All Product</button>
                    </NavLink>
                    :
                    <CatalogPagination scroll={scroll}/>
            }
        </section>
    );
};

export default Catalog;
