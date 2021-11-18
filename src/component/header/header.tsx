import React from 'react';
import HeaderButtonLink from './HeaderButtonLink';
import HeaderNav from './headerNav/HeaderNav';
import {SvgSelectorId} from '../SvgSelector';
import {useAction} from '../../hooks/useAction';
import styles from './style/style.module.scss';

const Header:React.FC = () => {
    const {cart, logo, burger, search, registration} = SvgSelectorId;
    const {switchMenuHeader} = useAction();

    return (
        <header className={styles.header}>
            <div className={styles.wrp}>
                <div>
                    <HeaderButtonLink is={'link'} className={styles.logo} logo={logo} link={'/'}/>
                    <HeaderButtonLink is={'button'} className={styles.search} logo={search} />
                </div>
                <div>
                    <HeaderButtonLink is={'button'} className={styles.button} logo={burger} onClick={switchMenuHeader}/>
                    <HeaderButtonLink is={'link'} className={styles.linkMobileHidden} logo={registration} link={'/registration'}/>
                    <HeaderButtonLink is={'link'} className={styles.linkMobileHidden} logo={cart} link={'/cart'}/>
                </div>
                <HeaderNav/>
            </div>
        </header>
    );
};

export default Header;
