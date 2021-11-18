export interface HeaderButtonProps{
    className:string;
    is: 'button' | 'link';
    logo:'cart' | 'logo'| 'burger' | 'search' | 'registration' | 'close';
    onClick?:()=>void;
    link?:string;
}

export interface ItemMenuJSON {
    title: string;
    subTitle: Array<{
        title: string
    }>
}

export interface HeaderNavMenuProps{
    menuItem:Array<ItemMenuJSON>;
}
