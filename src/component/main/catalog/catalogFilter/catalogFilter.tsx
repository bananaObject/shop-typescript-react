import React from 'react';
import FilterNavigation from '../../filter/filterNavigation/filterNavigation';
import styles from './style/style.module.scss';
import FilterForm from '../../filter/filterForm/filterForm';
import {FormConfiguration} from '../../form/configuration/configuration';


const catalogFilterFormButton:JSX.Element = <button className={styles.button} type={'submit'}>Apply</button>;

const CatalogFilter:React.FC = () => {
    return (
        <div className={styles.filter}>
            <h3 hidden={true}>catalog filter</h3>
            <FilterNavigation/>
            <FilterForm configurationFunc={FormConfiguration}
                        buttonFilterForm={catalogFilterFormButton}
            />
        </div>
    );
};

export default CatalogFilter;
