export interface HeaderNavLinkState {
    menuSwitch: boolean;
}

export enum HeaderNavLinkActionTypes {
    HEADER_NAV_MENU_SWITCH = 'HEADER_NAV_MENU_SWITCH',
}

export interface SwitchMenuHeaderAction {
    type: HeaderNavLinkActionTypes.HEADER_NAV_MENU_SWITCH;
}
