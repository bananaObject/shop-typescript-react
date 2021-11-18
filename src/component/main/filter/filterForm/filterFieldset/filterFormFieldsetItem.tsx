import React from 'react';
import styles from './style/style.module.scss';
import queryString from 'querystring';
import {FilterFormFieldsetProps} from './filterFormFieldset';


interface FilterFormFieldsetItemProps extends FilterFormFieldsetProps {
    buttonState: {
        setText: React.Dispatch<React.SetStateAction<string>>
        text: string;
    };
    paramsUrl: queryString.ParsedUrlQuery;
}

//TODO Error ???
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const FilterFormFieldsetItem: React.FC<FilterFormFieldsetItemProps> = ({settings, buttonState, paramsUrl})=> {
    //Настройки для фильтров
    const {type, value, register, name, setValue} = settings;

    //Проверка типа инпута
    if (type === 'checkbox') {
        return value.map((item, index) => {
                //Проверка на отмеченные checkbox(берется из query string)
                const checked = paramsUrl[name]?.toString().split(',').includes(item);

                if (checked) {
                    //Меняем значение на отмеченные в хуке useForm
                    setValue(item, checked);
                }
                return <label className={styles.divLabel} key={index}>
                    <input className={styles.divCheckboxInput} hidden={true}
                           type={type} {...register(item, {})}/>
                    <span className={styles.divCheckbox}/>
                    <span>{item}</span>
                </label>;
            }
        );
    }else if (type === 'select') {
        //Подгрузка имени кнопки если выбран select
        const {text, setText} = buttonState;
        return <label className={styles.divLabel}>
            {value.map((item, index) => {
                    return <span
                        key={index}
                        //Кастомный select
                        onClick={() => {
                            setText(item);
                            setValue(name, item);
                        }}
                        //Если выбрали кнопка
                        className={item === text ? styles.divActiveSelect : ''}
                    >
                    {item}
                </span>;
                }
            )}
        </label>;
    }else if (type === 'number') {
        return value.map((item, index) => {
                return <label className={styles.divLabel} key={index}>
                    <input className={styles.divInput}
                           type={type} {...register(item, {})}
                           min={0}/>
                </label>;
            }
        );
    }
};

export default FilterFormFieldsetItem;
