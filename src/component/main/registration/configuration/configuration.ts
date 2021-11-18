import {IForm} from '../../form/type';
import styles from './style/style.module.scss';

export const InputConfiguration = (): IForm[] => {
    return [
        {
            legend: 'Your name',
            items: [
                {
                    name: 'firstName',
                    type: 'text', placeholder: 'First Name',
                    validation: {
                        required: true, minLength: 6,
                        maxLength: 24,
                    },
                    label: {}
                },
                {
                    name: 'lastName',
                    type: 'text', placeholder: 'Last Name',
                    validation: {
                        required: true, minLength: 6,
                        maxLength: 24,
                    },
                    label: {}
                }
            ]
        },
        {
            items: [{
                name: 'gender',
                type: 'radio', value: ['male', 'female', 'other'],
                validation: {required: true},
                label: {
                    className: styles.radioOther
                }
            }]
        },
        {
            legend: 'Login details',
            items: [{
                name: 'email',
                type: 'email', placeholder: 'Email',
                validation: {required: true, minLength: 6},
                label: {}
            },
                {
                    name: 'password',
                    type: 'password', placeholder: 'Password',
                    validation: {required: true, minLength: 6,},
                    label: {},
                    paragraph: {
                        className: styles.passText,
                        version: 'Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters'
                    }
                }
            ]
        }
    ];
};

export const RegistrationLoyaltyConfigFunc = ():string[] =>['15% off welcome offer',
    'Free shipping, returns and exchanges on all orders',
    '$10 off a purchase on your birthday',
    'Early access to products',
    'Exclusive offers & rewards'
];
