import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Router} from 'react-router-dom';
import history from './app/shared/util/history';
import {Provider} from 'react-redux';
import {configureStore, store} from './app/store';
import {configureBaseApi} from './app/shared/api/common/clients/base-api';
import AuthAutoLogin from './app/modules/auth/auth-auto-login';

configureStore();
configureBaseApi();

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Provider store={store}>
                <AuthAutoLogin>
                    <App/>
                </AuthAutoLogin>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
