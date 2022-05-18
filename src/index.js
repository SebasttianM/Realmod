import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store/Store';
import AppRouter from './routes/AppRouter';


ReactDOM.render(
<Provider store={store}>
    
<AppRouter />
</Provider>

, document.getElementById("root"));