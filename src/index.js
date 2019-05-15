import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

import './styles/app.scss';

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

/*if (module.hot) {
    module.hot.accept();
} */