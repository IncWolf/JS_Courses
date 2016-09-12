var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            counter: 0,
            status: 1
        }
    },
    step: function() {
        this.setState({counter: this.state.counter+1});
    },
    componentDidMount: function () {
        this.interval = setInterval(this.step, 1000);
    },
    componentDidUpdate: function() {
        if (this.state.status == 1 && !this.interval) {
            this.interval = setInterval(this.step, 1000);
        } else if (this.state.status == 0) {
            clearInterval(this.interval);
            this.interval = false
        }
    },
    componentWillUnmount: function(){
        clearInterval(this.interval);
    },
    stop: function() {
        this.setState({status: 0});
    },
    reset: function() {
        this.setState({counter: 0});
    },
    start: function () {
        this.setState({status: 1});
    },
    render: function () {
        return (
            <div>
                <span>{this.state.counter}</span>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.start}>Start</button>
            </div>
        )
    }
});
ReactDOM.render(<Timer />, document.getElementById('output'));