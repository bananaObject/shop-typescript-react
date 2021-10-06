import React from 'react';
import CategoriesItem from './CategoriesItem';

const fetch = [
    {
        'categories': 'woman',
        'text': '30% off',
        'heading': 'for women'
    },
    {
        'categories':'man',
        'text':'hot deal',
        'heading':'for men'
    },
    {
        'categories':'kid',
        'text':'new arrivals',
        'heading':'for kids'
    },
    {
        'categories':'accesories',
        'text':'luxirous & trendy',
        'heading':'accesories'
    }
];


const Categories :React.FC= () => {
    return (
        <section className="categories box-container">
            <h2 className="visually-hidden">Categories</h2>
            <ul className="categories__list">

                {fetch.map((item, index)=>{
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
