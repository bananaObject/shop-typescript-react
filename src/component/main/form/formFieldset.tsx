import React from 'react';
import FormInput from './FormInput';
import {IForm} from './type';


interface FormFieldsetProps {
    fieldset: IForm
    register: any;
}

const FormFieldset: React.FC<FormFieldsetProps> = ({fieldset, register}) => {
    const {legend, items} = fieldset;

    return (
        <fieldset className={'form__fieldset' + (items[0].type === 'radio' ? ' form__fieldset--radio' : '')}>
            {
                legend ? <legend className="form__legend form__legend--upper">{legend}</legend> : null
            }
            {
                items.map((item, index) => <FormInput item={item} key={index} register={register}/>)
            }
        </fieldset>
    );
};

export default FormFieldset;
