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
        //this.createItem = this.createItem.bind(this);
    }

    createItem() {
        var item = {name: document.getElementById('name').value, complete: document.getElementById('complete').checked}
        TodoActions.createItem(item);
    }
    render() {
        return (<form>
            <div><Link to="/">
                <button>Back</button>
            </Link></div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" />
            <input type="checkbox" id="complete"/> Complete
            <div><button onClick={this.createItem}>Add</button></div>
        </form>)
    }
}

module.exports = Add;