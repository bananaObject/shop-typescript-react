import React from 'react';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import styles from './style/style.module.scss';
import {useHistory} from 'react-router-dom';
import FilterFormFieldset from './filterFieldset/filterFormFieldset';
import {FormFilterConfiguration} from '../../form/configuration/configuration';

interface FilterFormProps {
    buttonFilterForm:JSX.Element
    // Конфигурация фильтра
    configurationFunc: () => Array<FormFilterConfiguration>
}

const FilterForm: React.FC<FilterFormProps> = ({configurationFunc, buttonFilterForm}) => {
    //Создается конфиг
    const config = configurationFunc();

    //Хуки для формы, мог написать свою контролируемую форму через state
    // но решил использовать готовый вариант чтоб было меньше перерендера
    const {register, handleSubmit, setValue} = useForm();

    //хук для маршрутизации
    const historyHook = useHistory();

    //Отправка данных формы в url для фильтрации из бд
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('RWAr');
        //валидные данные для JSONServer, пришлось переделывать так как в фейковым апи многое нельзя сделать
        const object = Object.keys(data).reduce((acc, key) => {

            if (key === 'sort') {
                return {...acc, [key]: data[key]};
            } else if (key === 'price') {
                if (Number(data[key]) <= 0) {
                    return acc;
                }
                return {...acc, [key]: data[key]};
            }
            if (data[key] === true) {
                if (acc.size) {
                    return {...acc, size: acc.size + `,${key}`};
                }
                return {...acc, size: `${key}`};
            }

            if (data[key] === false && acc.size) {
                const newStr = acc.size.split(',').filter(value => value !== key).join(',');
                return {...acc, size: newStr};
            }

            return acc;
        }, {} as { [key: string]: string });

        //query params
        const params = new URLSearchParams({page: '1', ...object});
        const url = `${historyHook.location.pathname}?${params}`;
        //Обновляю url
        historyHook.push(url);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {
                config.map((item, index) => <FilterFormFieldset key={index} settings={{...item, register, setValue}}/>)
            }
            {buttonFilterForm}
        </form>
    );
};

export default FilterForm;
