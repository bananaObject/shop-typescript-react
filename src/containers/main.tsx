import React from 'react';
import Promo from '../component/main/promo';
import Categories from '../component/main/categories/Categories';
import Catalog from '../component/main/catalog/catalog';
import Info from '../component/main/info/info';
import Subscribe from '../component/main/subscribe/subscribe';

const Main:React.FC = () => {
    return (
        <main>
            <Promo/>
            <Categories/>
            <Catalog/>
            <Info/>
            <Subscribe/>
        </main>
    );
};

export default Main;
