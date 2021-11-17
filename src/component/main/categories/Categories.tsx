import React from 'react';
import CategoriesItem from './CategoriesItem';
import itemsJSON from './json/items.json';
import styles from './style/styles.module.scss';
const Categories :React.FC= () => {
    return (
        <section className={styles.categories}>
            <h2 hidden>Categories</h2>
            <ul className={styles.list}>

                {itemsJSON.map((item, index)=>{
                    const {heading,text,categories} = item;

                    return (
                        <CategoriesItem categories={categories} heading={heading} text={text} key={index}/>
                    );
                })}
            </ul>
        </section>
    );
};

export default Categories;
