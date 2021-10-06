import React from 'react';
import SvgSelector, {TypeSvgSelectorId} from '../SvgSelector';


interface HeaderButtonProps{
    className:Array<string>;
    is: 'button' | 'link';
    logo:TypeSvgSelectorId;
    onClick?:()=>void;
    link?:string;
}

const HeaderButton: React.FC<HeaderButtonProps>= (props) => {
    const {className, logo, is, link, onClick} = props;

    if(is === 'button'){
        return (
            <button className={className.join(' ')} type="button" onClick={onClick}>
                <SvgSelector id={logo}/>
            </button>
        );
    }

    return (
        <a className={className.join(' ')} href={link ? link : '#'}>
            <SvgSelector id={logo}/>
        </a>
    );

};

export default HeaderButton;
