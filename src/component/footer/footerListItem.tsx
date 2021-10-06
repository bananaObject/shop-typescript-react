import React from 'react';
import SvgSelector, {TypeSvgSelectorId} from '../SvgSelector';

interface FooterListItemProps{
    company:TypeSvgSelectorId;
}
const FooterListItem:React.FC<FooterListItemProps> = ({company}) => {
    return (
        <li className="footer__item">
            <a className="footer__item-link" href="#">
                <SvgSelector id={company}/>
            </a>
        </li>
    );
};

export default FooterListItem;
