import * as headerNavAction from './headerNav';
import * as catalog from './catalog';
import * as cart from './cart';

export default {
    ...headerNavAction,
    ...catalog,
    ...cart
};
