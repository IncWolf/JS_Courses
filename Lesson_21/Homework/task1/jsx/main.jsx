var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        }
    },
    add: function() {
        this.setState({counter: this.state.counter + 1});
    },
    sub: function() {
        this.setState({counter: this.state.counter - 1});
    },
    render: function() {
        return(<div><button onClick={this.sub}>-</button><span>{this.state.counter}</span><button onClick={this.add}>+</button></div>)
    }
});
ReactDOM.render(<Counter />, document.getElementById('output'));