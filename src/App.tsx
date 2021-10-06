import React from 'react';
import Header from './containers/header';
import './styles/scss/style.scss';
import Main from './containers/main';
import Footer from './containers/footer';

const App :React.FC= () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>

    );
};

export default App;
