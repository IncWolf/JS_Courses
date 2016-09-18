/**
 * Created by IncWolf on 18.09.2016.
 */
var React = require('react');
var Link = require('react-router').Link;

// импорт хранилища данных (store)
var TodoStore = require('../stores/toDoStore');

// импорт React-компонентов
var List = require('./list.jsx');

// импорт действий toDoActions
var TodoActions = require('../actions/toDoActions');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: TodoStore.getAll()
        };
        this.searchTasks = this.searchTasks.bind(this);
        this.refreshTable = this.refreshTable.bind(this);
    }
    refreshTable() {
        this.setState({tasks: TodoStore.getAll()})
    }
    searchTasks() {
        TodoActions.searchItems(document.getElementById('search_string').value);
    }
    componentWillMount() {
        TodoStore.on('CHANGE', this.refreshTable);
    }
    render() {
        return(<div>
                <div>
                    <h2>TO DO LIST</h2>
                    <div><Link to="/add"><button>Add</button></Link></div>
                </div>
                <List items={this.state.tasks}/>
                <div>
                    <input type="text" id="search_string" />
                    <button onClick={this.searchTasks}>Search</button>
                </div>
            </div>
        )}
}

module.exports = App;