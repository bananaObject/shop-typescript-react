import React from 'react';
import CatalogPaginationItem from './catalogPaginationItem';
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {useHistory, useLocation} from 'react-router-dom';
import queryString from 'querystring';
import styles from './style/style.module.scss';

interface CatalogPaginationProps {
    scroll: () => void
}

//TODO доработать пагинацию
const CatalogPagination: React.FC<CatalogPaginationProps> = ({scroll}) => {
    const {maxPage, page} = useTypedSelector(state => state.catalog);

    //Массив для рендера кнопок
    let paginationArray: Array<'dot' | 'left' | 'right' | number> = [];

    //Получение query params(url)
    const {search} = useLocation();
    const history = useHistory();
    const params = queryString.parse(search.slice(1));


    const setPage = (page: number) => {
        //Передача query params для каталога
        const object = {...params, page: String(page)};
        const paramsUrl = new URLSearchParams(object);
        const url = `${history.location.pathname}?${paramsUrl}`;
        history.push(url);
        //Скролл на начало каталога
        scroll();
    };

    //Добавление в массив имен в зависимости количества страниц
    if (maxPage <= 6) {
        paginationArray.push('left');
        for (let i = 1; i <= maxPage; i++) {
            paginationArray.push(i);
        }
        paginationArray.push('right');
    } else {
        if (6 <= page && page <= maxPage - 6) {
            paginationArray = ['left', 1, 'dot', page - 1, page, page + 1, 'dot', maxPage, 'right'];
        } else if (page <= 5) {
            paginationArray = ['left', 1, 2, 3, 4, 5, 6, 'dot', 'right'];
        } else if (page >= maxPage - 5) {
            paginationArray = ['left', 'dot', maxPage - 5, maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage, 'right'];
        }
    }


    return (
        <div>
            <h3 hidden={true}>catalog pagination</h3>

            <ul className={styles.list}>
                {
                    //рендер массива кнопок
                    paginationArray.map((paginationItem, index) => {
                        if (paginationItem === 'left') {
                            return <CatalogPaginationItem className={styles.buttonSvg}
                                                          onClick={() => setPage(page - 1)} key={index}>
                                <svg width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"/>
                                </svg>
                            </CatalogPaginationItem>;
                        } else if (paginationItem === 'right') {
                            return <CatalogPaginationItem className={styles.buttonSvg} onClick={() => setPage(page + 1)}
                                                          key={index}>
                                <svg width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"/>
                                </svg>
                            </CatalogPaginationItem>;
                        } else if (paginationItem === 'dot') {
                            return <CatalogPaginationItem className={styles.button} key={index}>
                                ...
                            </CatalogPaginationItem>;
                        } else {
                            return <CatalogPaginationItem
                                className={paginationItem === page ? styles.buttonActive : styles.button}
                                onClick={() => setPage(paginationItem)} key={index}>
                                {paginationItem}
                            </CatalogPaginationItem>;
                        }
                    })
                }
            </ul>
        </div>
    );
};

export default CatalogPagination;
