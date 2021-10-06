export enum HeaderNavLinkActionTypes {
    HEADER_NAV_MENU_SWITCH = 'HEADER_NAV_MENU_SWITCH',
}

export type HeaderNavLinkAction  = SwitchMenuHeaderAction;

interface SwitchMenuHeaderAction {
    type: HeaderNavLinkActionTypes.HEADER_NAV_MENU_SWITCH;
}

export interface IHeaderNavLink {
    title: string;
    subTitle: {
        title: string
    }[]
}

export interface HeaderNavLinkState {
    navItems: IHeaderNavLink[];
    menuSwitch: boolean;
}
