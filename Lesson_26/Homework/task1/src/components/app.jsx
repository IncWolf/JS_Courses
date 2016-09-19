/**
 * Created by galushkasergiy on 19.09.16.
 */
var React = require ('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var actions = require('../actions/toDoActions');

class App extends React.Component {
    constructor() {
        super();
        this.clickHandler =  this.changeModeHandler.bind(this)
    }
    changeModeHandler(e) {
        this.props.changeMode(e.target.checked);
    }
    render() {
        let changeHandler = this.changeModeHandler.bind(this);
        return (<div>
            {/*this.props.state.tableMode ? <Table items={this.props.state.tasks}/> : <List items={this.props.state.tasks}/>*/ }
            {/*<AddNoteComponent />*/}
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
        changeMode: actions.changeMode
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);