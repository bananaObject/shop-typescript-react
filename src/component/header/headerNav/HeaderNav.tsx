import React, {useEffect, useState} from 'react';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import HeaderButton from '../HeaderButton';
import {useAction} from '../../../hooks/useAction';

const HeaderNav: React.FC = () => {
    const {navItems, menuSwitch} = useTypedSelector(state => state.headerNav);
    const {switchMenuHeader} = useAction();
    const [menuRender, setMenuRender] = useState<boolean>(false);
    const [style, setStyle] = useState({nav: {}, menu: {}});

    const {nav, menu} = style;

    useEffect(() => {
        if (menuSwitch) {
            setMenuRender(true);

            setTimeout(() => {
                setStyle(
                    {
                        nav: {transform: 'translateX(0px)'},
                        menu: {
                            height: '765px',
                            background: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                );
            }, 100);

        } else {
            setStyle({
                nav: {},
                menu: {
                    height: '765px'
                }
            });
            setTimeout(() => {
                setMenuRender(false);
            }, 310);
        }
    }, [menuSwitch]);

    if (menuRender){
        return (
            <div className="header__menu" style={menu}>
                <div className="header__menu-wrp"/>

                <nav className="header__menu-nav header__navigation" style={nav}>
                    <HeaderButton is={'button'} logo={'close'} className={['header__navigation-close-button']} onClick={switchMenuHeader}/>
                    <h2 className="header__navigation-title">menu</h2>

                    <ul className='header__navigation-list'>
                        {//TODO Продумать nav
                            navItems?.map((item, index) =>
                                (
                                    <li className="header__navigation-item  navigation-item" key={index}>
                                        <a className="navigation-item-link" href="#">{item.title}</a>

                                        <ul className="navigation-item__sub-list">
                                            {item.subTitle.map((subTitle, index)=>
                                                (
                                                    <li className="navigation-item__sub-item" key={index}>
                                                        <a className="navigation-item__sub-item-link" href="#">{subTitle.title}</a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </nav>
            </div>
        );
    }else {
        return null;
    }

};

export default HeaderNav;
