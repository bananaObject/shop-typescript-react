import React from 'react';
import Promo from '../component/main/promo/promo';
import Categories from '../component/main/categories/Categories';
import Catalog from '../component/main/catalog/catalog';
import Info from '../component/main/info/info';
import Subscribe from '../component/main/subscribe/subscribe';
import styles from './style/style.module.scss';

const MainHome: React.FC = () => {
    return (
        <>
            <main>
                <Promo/>
                <Categories/>
                <Catalog>
                    <h2 hidden>Featured Items</h2>
                    <p className={styles.catalogText}>Shop for items based on what we featured in this week</p>
                </Catalog>
                <Info/>
                <Subscribe/>
            </main>
        </>

    );
};

export default MainHome;
