import {
    HeaderNavLinkActionTypes,
    HeaderNavLinkState,
    SwitchMenuHeaderAction
} from '../types/headerNav';

const initialState :HeaderNavLinkState= {
    menuSwitch: false,
};

export const headerNavReducer = (state: HeaderNavLinkState = initialState, action: SwitchMenuHeaderAction): HeaderNavLinkState => {
    switch (action.type) {
        case HeaderNavLinkActionTypes.HEADER_NAV_MENU_SWITCH:
            return {...state, menuSwitch:!state.menuSwitch};
        default:
            return state;
    }
};
