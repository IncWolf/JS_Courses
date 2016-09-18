/**
 * Created by Incy on 18.09.2016.
 */
var React = require('react');
var Link = require('react-router').Link;
var TodoStore = require('../stores/toDoStore');

// импорт React-компонентов
var List = require('./list.jsx');

// импорт действий toDoActions
var TodoActions = require('../actions/toDoActions');

class Add extends React.Component {
    constructor() {
        super();

        //привязка контекста
        this.createItem = this.createItem.bind(this);
        // this.updateTasks = this.updateTasks.bind(this);
        // this.removeItemHandler = this.removeItemHandler.bind(this);
    }
    createItem() {
        var item = {}
    }
    render() {
        return (<form>
            <label for="name">Name: </label>
            <input type="text" id="name" />
            <input type="checkbox" id="complete"/> Complete
            <div><button onClick={this.createItem}>Add</button></div>
        </form>)
    }
}

module.exports = Add;