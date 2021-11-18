import React, {useEffect, useState} from 'react';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import HeaderButtonLink from '../HeaderButtonLink';
import {useAction} from '../../../hooks/useAction';
import HeaderNavMenu from './HeaderNavMenu';
import itemsMenuJSON from './json/headerMenuItem.json';
import styles from './style/style.module.scss';

const HeaderNav: React.FC = () => {
    const {menuSwitch} = useTypedSelector(state => state.headerNav);

    const [menuRender, setMenuRender] = useState<boolean>(false);
    const {switchMenuHeader} = useAction();

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

    if (menuRender) {
        return (
            <div className={styles.menu} style={menu}>
                <div className={styles.wrp}/>

                <nav className={styles.navigation} style={nav}>
                    <HeaderButtonLink is={'button'} logo={'close'} className={styles.navigationCloseButton}
                                      onClick={switchMenuHeader}/>

                    <h2 className={styles.navigationTitle}>menu</h2>

                    <HeaderNavMenu menuItem={itemsMenuJSON}/>
                </nav>
            </div>
        );
    } else {
        return null;
    }

};

export default HeaderNav;
