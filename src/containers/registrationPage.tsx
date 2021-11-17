import React from 'react';
import Topic from '../component/main/topic/topic';
import Subscribe from '../component/main/subscribe/subscribe';
import Registration from '../component/main/registration/registration';

const RegistrationPage:React.FC = () => {
    return (
        <main>
            <Topic text={'Registration'}/>
            <Registration/>
            <Subscribe/>
        </main>
    );
};

export default RegistrationPage;
