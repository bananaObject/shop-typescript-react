import React from "react";

export interface InputItem {
    element?: 'input';
    type: 'text' | 'radio' | 'email' | 'password';
    name: string;
    value?: Array<string>
    placeholder?: string,
    validation: {
        required: boolean;
        minLength?: number,
        maxLength?: number,
    }
    valid?: boolean;
    touched?: boolean;
    errorMessage?: string;
    label: {
        text?: string
        className?: string;
    }
    paragraph?: {
        className: string,
        version: string
    }
}

export type IForm = {
    legend?: string,
    items: InputItem[]
};

export type onSubmitType = (data: any, setFetchOk: React.Dispatch<React.SetStateAction<boolean>>,setError: React.Dispatch<React.SetStateAction<boolean>>) =>void

export interface FormSettings{
    InputConfiguration: () => IForm[];
    formClass:string;
    textForm: string;
    textFetchOk: string
    button: {
        onSubmit:onSubmitType;
        buttonText: string;
        buttonSvg?: JSX.Element;
        buttonClassName?:string;
    }
}

export interface FormProps {
    settings:FormSettings
}
