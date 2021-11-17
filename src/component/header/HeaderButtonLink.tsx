import React from 'react';
import SvgSelector from '../SvgSelector';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import { NavLink } from 'react-router-dom';
import {HeaderButtonProps} from './type/type';
import styles from './style/style.module.scss';

const HeaderButtonLink: React.FC<HeaderButtonProps> = (props) => {
    const {className, logo, is, link, onClick} = props;

    const {productInfo} = useTypedSelector(state => state.cart);

    if (is === 'button') {
        return (
            <button className={className} type="button" onClick={onClick}>
                <SvgSelector id={logo} className={''}/>
            </button>
        );
    }

    return (
        <NavLink className={className} to={link ? link : '#'}>
            <SvgSelector id={logo} className={''}/>

            {logo === 'cart' ?
                <span className={styles.linkSvg__cart}>{productInfo.length}</span> : null}
        </NavLink>
    );

};

export default HeaderButtonLink;
