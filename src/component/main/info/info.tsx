import React from 'react';
import InfoItem from './infoItem';

import {infoJson} from './fetch';

const Info: React.FC = () => {
    return (
        <section className="info">
            <h2 className="visually-hidden">Info</h2>
            <ul className="info__list box-container">
                {infoJson.map((item, index) => {
                    const {logo, heading, text} = item;
                    return <InfoItem logo={logo} text={text} heading={heading} key={index}/>;
                })}
            </ul>
        </section>
    );
};

export default Info;
