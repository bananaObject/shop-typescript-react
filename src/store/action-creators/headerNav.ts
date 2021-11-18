import {HeaderNavLinkActionTypes, SwitchMenuHeaderAction} from '../types/headerNav';


export const switchMenuHeader = () :SwitchMenuHeaderAction=> {
    return { type: HeaderNavLinkActionTypes.HEADER_NAV_MENU_SWITCH};
};
