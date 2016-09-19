/**
 * Created by galushkasergiy on 19.09.16.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var inputReducer = require('./reducers/main.jsx');
var App = require('./components/app.jsx');

let store = createStore(inputReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('output')
)