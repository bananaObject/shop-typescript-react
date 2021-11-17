import React from 'react';
import Form from '../../form/form';
import {IForm, onSubmitType} from '../../form/type';
import axios, {AxiosResponse} from 'axios';
import styles from './style/style.module.scss';

const CartOrderShippingForm: React.FC = () => {
    const InputConfiguration = (): IForm[] => {
        return [
            {
                legend: 'shipping address',
                items: [
                    {
                        name: 'city',
                        type: 'text', placeholder: 'City',
                        validation: {
                            required: true, minLength: 6,
                            maxLength: 24,
                        },
                        label: {}
                    },
                    {
                        name: 'state',
                        type: 'text', placeholder: 'State',
                        validation: {
                            required: true, minLength: 6,
                            maxLength: 24,
                        },
                        label: {}
                    },
                    {
                        name: 'zipcode',
                        type: 'text', placeholder: 'Zipcode',
                        validation: {
                            required: true, minLength: 6,
                            maxLength: 24,
                        },
                        label: {}
                    }
                ]
            }
        ];
    };

    const onSubmit:onSubmitType = (data, setFetchOk,setError) => {
        const {city,state, zipcode} = data;
        const urlFetch = `http://localhost:3100/checkAddress?city=${city}&state=${state}&zipcode=${zipcode}`;
        axios.get(urlFetch)
            .then((res:AxiosResponse<Array<any>>) => {
                if (!res.data.length) {
                    setError(true);
                }else {
                    setFetchOk(true);
                }
            });
    };

    const formSettings = {
        InputConfiguration,
        formClass: styles.orderShipping,
        textFetchOk: 'Address OK',
        textForm: 'Form Shipping',
        button: {
            onSubmit,
            buttonText: 'Check address',
            buttonClassName: styles.orderButtonGetQuote
        }
    };

    return (
        <Form settings={formSettings}/>
    );
};

export default CartOrderShippingForm;
