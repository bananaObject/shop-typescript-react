import React from 'react';
import SvgSelector from '../../SvgSelector';

interface CatalogItemProps {
    id?:number,
    img: {
        src:string,
        alt:string,
        width:string,
        height:string
    },
    heading: string,
    text: string,
    price: string
}

const CatalogItem: React.FC<CatalogItemProps> = (props) => {
    const {img, heading, text, price} = props;

    return (
        <li className="catalog__item">
            <div className="catalog__item-overlay">
                <img className="catalog__item-img" src={img.src} alt={img.alt} width={img.width} height={img.height}/>
                <button className="catalog__item-button" type="button">
                    <SvgSelector id={'catalog'}/>
                    Add to Cart
                </button>
            </div>
            <div className="catalog__item-info">
                <h3 className="catalog__item-heading">{heading}</h3>
                <p className="catalog__item-text">{text}</p>
                <p className="catalog__item-price">{price}</p>
            </div>
        </li>
    );
};

export default CatalogItem;
