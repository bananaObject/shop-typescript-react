import React from 'react';
import SvgSelector, {TypeSvgSelectorId} from '../../SvgSelector';

export interface InfoItemProps {
    logo: TypeSvgSelectorId,
    heading: string,
    text: string,
}

const InfoItem: React.FC<InfoItemProps> = (props) => {
    const {logo, text, heading} = props;
    return (
        <li className="info__item">
            <SvgSelector id={logo}/>
            <h3 className="info__item-heading">{heading}</h3>
            <p className="info__item-text">{text}</p>
        </li>
    );
};

export default InfoItem;
