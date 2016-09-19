var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var actions = require('../actions/index');

class App extends React.Component {

    render() {
    return (
        <div>
            <input type="text" id="input" onInput={() => this.props.input(document.getElementById('input').value)}/>
            <h2>{this.props.output}</h2>
        </div>
    )}
}

//функция для привязки состояния приложения к props (свойствам компонента)
function mapStateToProps(state) {
    return {
        output: state
    }
}

//функция для привязки actions к props (свойствам компонента)
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        input: actions.input
    } , dispatch )
}

// привязка actions и state к React компоненту
module.exports = connect(mapStateToProps, matchDispatchToProps)(App);