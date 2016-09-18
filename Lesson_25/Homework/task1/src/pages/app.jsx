/**
 * Created by IncWolf on 18.09.2016.
 */
var React = require('react');
var Link = require('react-router').Link;

// импорт хранилища данных (store)
var TodoStore = require('../stores/toDoStore');

// импорт React-компонентов
//var Table = require('./table.jsx');
var List = require('./list.jsx');

// импорт действий toDoActions
var TodoActions = require('../actions/toDoActions');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: TodoStore.getAll()
        }
    }
    render() {
        return(<div>
                <div>
                    <h2>TO DO LIST</h2>
                    <div><Link to="/add"><button>Add</button></Link></div>
                </div>
                <List items={this.state.tasks}/> }
            </div>
        )}
}

module.exports = App;