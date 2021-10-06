import React, {useState} from 'react';
import {TypeSvgSelectorId} from '../SvgSelector';
import FooterListItem from './footerListItem';

const FooterList:React.FC = () => {
    const [company] = useState<TypeSvgSelectorId[]>(['facebook','instagram', 'pinteres', 'twitter']);
    return (
        <ul className="footer__list">
            {company.map((value, index) => <FooterListItem company={value} key={index}/>)}
        </ul>
    );
};

export default FooterList;
