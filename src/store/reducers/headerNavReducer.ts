import {HeaderNavLinkAction, HeaderNavLinkActionTypes, HeaderNavLinkState} from '../types/headerNav';

const initialState :HeaderNavLinkState= {
    navItems: [
        {
            'title': 'man',
            'subTitle': [
                {
                    'title': 'Accessories'
                },
                {
                    'title': 'Bags'
                },
                {
                    'title': 'Denim'
                },
                {
                    'title': 'Shirts'
                }
            ]
        },
        {
            'title': 'woman',
            'subTitle': [
                {
                    'title': 'Accessories'
                },
                {
                    'title': 'Jackets & Coats'
                },
                {
                    'title': 'Polos'
                },
                {
                    'title': 'T-Shirts'
                },
                {
                    'title': 'Shirts'
                }
            ]
        }
        ,
        {
            'title': 'kids',
            'subTitle': [
                {
                    'title': 'Accessories'
                },
                {
                    'title': 'Jackets & Coats'
                },
                {
                    'title': 'T-Shirts'
                },
                {
                    'title': 'Shirts'
                },
                {
                    'title': 'Bags'
                }
            ]
        }
    ],
    menuSwitch: false,
};

export const headerNavReducer = (state: HeaderNavLinkState = initialState, action: HeaderNavLinkAction): HeaderNavLinkState => {
    switch (action.type) {
        case HeaderNavLinkActionTypes.HEADER_NAV_MENU_SWITCH:
            return {...state, menuSwitch:!state.menuSwitch};
        default:
            return state;
    }
};
