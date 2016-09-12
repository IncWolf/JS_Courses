var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        }
    },
    step: function() {
        this.setState({counter: this.state.counter+1});
    },
    componentDidMount: function () {
        this.interval = setInterval(this.step, 1000);
    },
    componentWillUnmount: function(){
        clearInterval(this.interval);
    },
    render: function () {
        return (
            <span>{this.state.counter}</span>
        )
    }
});
ReactDOM.render(<Timer />, document.getElementById('output'));