import React from 'react';
import HeaderButton from '../component/header/HeaderButton';
import HeaderNav from '../component/header/headerNav/HeaderNav';
import {SvgSelectorId} from '../component/SvgSelector';
import {useAction} from '../hooks/useAction';

const Header:React.FC = () => {
    const {cart, logo, burger, search, registration} = SvgSelectorId;
    const {switchMenuHeader} = useAction();

    return (
        <header className="header">
            <div className="box-container header__wrapper">
                <div>
                    <HeaderButton is={'link'} className={['header__logo']} logo={logo} />
                    <HeaderButton is={'button'} className={['header__search']} logo={search} />
                </div>
                <div>
                    <HeaderButton is={'button'} className={['header__button']} logo={burger} onClick={switchMenuHeader}/>
                    <HeaderButton is={'link'} className={['header__link', 'header__link--mobile-hidden']} logo={registration} />
                    <HeaderButton is={'link'} className={['header__link','header__link--mobile-hidden']} logo={cart} />
                </div>
                <HeaderNav/>
            </div>
        </header>
    );
};

export default Header;
