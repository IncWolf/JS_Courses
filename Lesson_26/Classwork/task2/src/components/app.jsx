var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Child = require('../components/list.jsx');

var users = [{name: 'Sergey', age: 25}, {name: 'Ivan', age: 23}];

class App extends React.Component {

    render() {
    return (
        <div>
            <button onClick={this.props.showList}>Show list</button>
            <Child show={this.props.show} users={users}/>
        </div>
    )}
}

//функция для привязки состояния приложения к props (свойствам компонента)
function mapStateToProps(state) {
    return {
        show: state
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