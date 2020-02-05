import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import configureStore, {history} from './utils/configureStore';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const store = configureStore();
//console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>

, document.getElementById('root'));


