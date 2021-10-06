import React from 'react';

const SubscribeForm:React.FC = () => {
    return (
        <form className="subscribe__form" action="#">
            <fieldset className="subscribe__form-fieldset">
                <legend className="subscribe__form-legend">subscribe <span
                    className="subscribe__form-legend subscribe__form-legend--sub">for our newletter and promotion</span>
                </legend>
                <div className="subscribe__form-box-input-button">
                    <label htmlFor="email-sub"/>
                    <input className="subscribe__form-input" id="email-sub" type="email"
                           placeholder="Enter Your Email"/>
                    <button className="subscribe__form-button" type="button">Subscribe</button>
                </div>
            </fieldset>
        </form>
    );
};

export default SubscribeForm;
