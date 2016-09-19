/**
 * Created by galushkasergiy on 19.09.16.
 //*/
    //Инициализируем необходиміе для приложения переменные
    //Подключаем React
var React = require ('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var redux = require('redux');
var applyMiddleware = redux.applyMiddleware;

// redux-thunk - middleware-функция, позволяющая создавать actionCreators, которые возвращают функцию вместо action.
var thunk = require('redux-thunk').default;
var toDoReducer = require('./reducers/toDoReducer');
var App = require('./components/app.jsx');

var fetchUsers = require('./actions/async').fetchUsers;

const middleware = applyMiddleware(thunk);
const store = createStore(toDoReducer, middleware)

// инициализация асинхронной загрузки данных
store.dispatch(fetchUsers())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('output'));



