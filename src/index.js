import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './example/App';
import reportWebVitals from'./reportWebVitals';
import store from './example/redux/config/configstore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();