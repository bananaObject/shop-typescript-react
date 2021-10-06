import React from 'react';
import imgMan from '../../img/man.jpg';

const Promo:React.FC= () => {
    return (
        <section className="promo">
            <img className="promo__img" src={imgMan} alt="promo-man" width="800" height="765"/>
                <div className="promo__heading-wrapper">
                    <h1 className="promo__heading">The brand <span className="promo__sub-heading">of luxerious <span
                        className="promo__sub-heading-pink">fashion</span></span></h1>
                </div>
        </section>
    );
};

export default Promo;
