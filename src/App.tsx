import React from 'react';
import './assets/scss/style.scss';
import {Route, Router, Switch, } from 'react-router-dom';
import MainHome from './containers/mainHome';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import CartPage from './containers/cartPage';
import { createBrowserHistory } from 'history';
import RegistrationPage from './containers/registrationPage';
import CatalogPage from './containers/catalogPage';

const history = createBrowserHistory();

const App: React.FC = () => {
    return (
        <Router  history={history}>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={MainHome}/>
                <Route path={'/cart'} component={CartPage}/>
                <Route path={'/registration'} component={RegistrationPage}/>
                <Route path={'/all-catalog'} component={CatalogPage}/>
            </Switch>
            <Footer/>
        </Router>
    );
};

export default App;
