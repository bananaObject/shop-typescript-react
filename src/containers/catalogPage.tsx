import React, {useEffect} from 'react';
import Info from '../component/main/info/info';
import Subscribe from '../component/main/subscribe/subscribe';
import Topic from '../component/main/topic/topic';
import Catalog from '../component/main/catalog/catalog';
import CatalogFilter from '../component/main/catalog/catalogFilter/catalogFilter';


const CatalogPage:React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
      <main>
          <Topic text={'New arrivals'}/>
          <Catalog pageLimit={12}>
              <CatalogFilter/>
          </Catalog>
          <Info/>
          <Subscribe/>
      </main>
    );
};

export default CatalogPage;
