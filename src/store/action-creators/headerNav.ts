import {HeaderNavLinkAction, HeaderNavLinkActionTypes} from '../types/headerNav';

export const switchMenuHeader = () :HeaderNavLinkAction=> {
    return { type: HeaderNavLinkActionTypes.HEADER_NAV_MENU_SWITCH};
};
