import React from 'react';
import SubscribeForm from './subscribeForm';
import SubscribeQuote from './subscribeQuote';

const Subscribe: React.FC = () => {
    return (
        <section className="subscribe">
            <h2 className="visually-hidden">Subscribe</h2>

            <ul className="subscribe__list box-container">
                <li className="subscribe__item">
                    <SubscribeQuote/>
                </li>
                <li className="subscribe__item">
                    <SubscribeForm/>
                </li>
            </ul>
        </section>
    );
};

export default Subscribe;
