/**
 * Created by galushkasergiy on 19.09.16.
 */
var React = require ('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var List = require('./list.jsx');
var Table = require('./table.jsx');
var AddNoteComponent = require('./add_form.jsx');
var actions = require('../actions/toDoActions');

class App extends React.Component {
    constructor() {
        super();
        this.changeModeHandler =  this.changeModeHandler.bind(this);
        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.removeTaskHandler = this.removeTaskHandler.bind(this);
    }
    changeModeHandler(e) {
        this.props.changeMode(e.target.checked);
    }
    addTaskHandler() {
        this.props.addTask(`${Date.now()}`,document.getElementById('title').value, document.getElementById('complete').checked);
    }
    removeTaskHandler(e) {
        this.props.removeTask(e.target.dataset.id);
    }
    render() {
        let changeHandler = this.changeModeHandler.bind(this);
        let clickHandler = this.addTaskHandler.bind(this);
        let deleteHandler = this.removeTaskHandler.bind(this);
        return (<div>
            {this.props.state.tableMode ? <Table items={this.props.state.tasks} deleteHandler={deleteHandler}/> : <List items={this.props.state.tasks} deleteHandler={deleteHandler}/> }
            <AddNoteComponent clickHandler={clickHandler}/>
            <div><label htmlFor="tableChanger">Table mode</label><input id="tableChanger" type="checkbox" onChange={changeHandler} /></div>
        </div>)
    }
}

// связывание состояния приложения с React компонентом
function mapStateToProps(state) {
    console.log(state);
    return {
        state: state
    }
}

// связывание функции действия deleteUser со свойством React компонента deleteUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeMode: actions.changeMode,
        addTask: actions.addTask,
        removeTask: actions.removeTask
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);