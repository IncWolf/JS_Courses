/**
 * Created by galushkasergiy on 19.09.16.
 //*/
    //Инициализируем необходиміе для приложения переменные
    //Подключаем React
var React = require ('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var toDoReducer = require('./reducers/toDoReducer');
var App = require('./components/app.jsx');

const store = createStore(toDoReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('output'));



