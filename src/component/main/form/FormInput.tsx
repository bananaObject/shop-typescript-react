import React from 'react';
import {InputItem} from './type';



interface FormInputProps {
    item: InputItem
    register: any;
}


const FormInput: React.FC<FormInputProps> = ({item, register}) => {
    const {name, value, label, validation, ...props} = item;

    if (item.type === 'radio') {
        return (
            <>
                {value?.map((text, index) => {
                    return <div key={index}>
                        <input className='form__radio' hidden {...register(name)}
                               {...props} id={`gender_${text}`} value={text}/>
                        <label htmlFor={`gender_${text}`}
                               className={'form__label' + (text === 'other' ? ` ${label.className}` : '')}>
                            {text}
                        </label>
                    </div>;
                })}
            </>
        );
    }

    return (
        <label className={label.className}>
            <input className='form__input' {...props} {...register(name, validation)}/>
        </label>
    );
};

export default FormInput;
