import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



import { Provider } from 'react-redux';
import store from '../store';


class App extends Component {

    render() {
        return (
            <Provider store={store}>
            <Fragment>
                <h1> First Component </h1>
            </Fragment>
            </Provider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));