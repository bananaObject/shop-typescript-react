export type FormFilterTypes = 'number' | 'select' | 'checkbox'

export interface FormFilterConfiguration {
    name: string,
    type: FormFilterTypes,
    value: Array<string>,
    buttonText: string
}

export const FormConfiguration = (): Array<FormFilterConfiguration> => {
    return [
        {
            name: 'price',
            type: 'number',
            value: ['price'],
            buttonText: 'price'
        },
        {
            name: 'sort',
            type: 'select',
            value: ['old', 'new', 'low price', 'big price'],
            buttonText: 'Trending now'
        },
        {
            name: 'size',
            type: 'checkbox',
            value: ['xs', 's', 'm', 'l'],
            buttonText: 'Size'
        },
    ];
};
