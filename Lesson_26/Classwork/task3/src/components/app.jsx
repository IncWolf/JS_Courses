var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Child = require('../components/list.jsx');

class App extends React.Component {

    render() {
    return (
        <div>
            <button onClick={this.props.showList}>Show list</button>
            <Child show={this.props.state.show} users={this.props.state.users}/>
        </div>
    )}
}

//функция для привязки состояния приложения к props (свойствам компонента)
function mapStateToProps(state) {
    return {
        state: state
    }
}

//функция для привязки actions к props (свойствам компонента)
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showList: actions.show
    } , dispatch )
}

// привязка actions и state к React компоненту
module.exports = connect(mapStateToProps, matchDispatchToProps)(App);