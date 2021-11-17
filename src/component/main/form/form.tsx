import React, {useState} from 'react';
import FormFieldset from './formFieldset';
import {useForm} from 'react-hook-form';
import {FormProps, IForm} from './type';


//TODO сделать style.module
const Form: React.FC<FormProps> = ({settings}) => {
    const {InputConfiguration, formClass, textFetchOk, textForm, button} = settings;
    const form: IForm[] = InputConfiguration();
    const [fetchOk, setFetchOk] = useState<boolean>(false);
    const [error, setError]= useState<boolean>(false);

    const {onSubmit,buttonText,buttonSvg,buttonClassName} = button;

    //TODO доделать ошибку
    const {register, handleSubmit} = useForm();

    if (fetchOk) {
        return <div className={'registration__form form'}>
            <h1 style={{margin: 'auto'}}>
                {textFetchOk}
            </h1>
        </div>;
    }

    return (
        <form action="#" className={`${formClass} form`} onSubmit={handleSubmit(data => onSubmit(data,setFetchOk, setError))}>
            <h3 hidden>{textForm}</h3>
            {
                form.map((value, index) => {
                    return <FormFieldset key={index} fieldset={value} register={register}/>;
                })
            }
            {
                error? <h1>Oops!</h1> : null
            }
            <button className={buttonClassName} type="submit">
                <span className={buttonSvg ? 'registration__button-text' : ''}>{buttonText}</span>
                {buttonSvg}
            </button>
        </form>
    );
};

export default Form;
