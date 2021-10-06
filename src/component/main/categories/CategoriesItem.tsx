import React from 'react';

interface CategoriesItemProps{
    categories:string;
    text:string;
    heading:string
}

const CategoriesItem :React.FC<CategoriesItemProps>= (props) => {
    const {heading, categories, text} = props;

    return (
        <li className={`categories__item categories__item--${categories}`}>
            <a className="categories__item-link" href="./product.html">
                <p className="categories__text">{text}</p>
                <h3 className="categories__heading">{heading}</h3>
            </a>
        </li>
    );
};

export default CategoriesItem;
