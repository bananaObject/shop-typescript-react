import React from 'react';
import CatalogItem from './catalogItem';

import {catalogJson} from './fetch';

const Catalog: React.FC = () => {
    return (
        <section className="catalog box-container">
            <h2 className="catalog__heading">Fetured Items</h2>
            <p className="catalog__text">Shop for items based on what we featured in this week</p>

            <ul className="catalog__list">
                {
                    catalogJson.map(item => {
                        const {img, heading, text, price, id} = item;
                        return (
                            <CatalogItem img={img} text={text} heading={heading} price={price} key={id}/>
                        );
                    })
                }
            </ul>
            <button className="catalog__button" type="button">Browse All Product</button>
        </section>
    );
};

export default Catalog;
