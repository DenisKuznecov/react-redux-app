import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import store from './Utils/configureStore'
import Layout from './Containers/Layout/Layout'
import UserList from './Containers/UserList/UserList';

import '../node_modules/reset.css/reset.css'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={UserList}/>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
