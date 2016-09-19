/**
 * Created by galushkasergiy on 19.09.16.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var inputReducer = require('./reducers/main.jsx');
var App = require('./components/app.jsx');

var applyMiddleware = redux.applyMiddleware;

// redux-thunk - middleware-функция, позволяющая создавать actionCreators, которые возвращают функцию вместо action.
var thunk = require('redux-thunk').default;

const middleware = applyMiddleware(thunk);
const store = createStore(inputReducer, middleware);
var fetchUsers = require('./actions/async').fetchUsers;

store.dispatch(fetchUsers());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('output')
);