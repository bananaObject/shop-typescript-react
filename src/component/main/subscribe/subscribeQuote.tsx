import React from 'react';
import photoWoman from '../../../img/photo-woman.png';

const SubscribeQuote:React.FC = () => {
    return (
        <>
            <img className="subscribe__item-img" src={photoWoman} alt="subscribe-woman" width="96" height="96"/>
            <span className="subscribe__item-quote">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                <span className="subscribe__item-quote-italic"> a pulvinar purus condimentum“</span></span>
        </>
    );
};

export default SubscribeQuote;
