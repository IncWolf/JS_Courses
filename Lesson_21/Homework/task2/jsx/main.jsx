/**
 * Created by IncWolf on 14.09.2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Calc = React.createClass({
    getInitialState: function() {
        return {
            a: '',
            b: '',
            output:''
        }
    },
    checkValue: function(e) {
        if ((e.keyCode <= 57 && e.keyCode >= 48) || e.keyCode == 8) {
            if (e.target.getAttribute('id') == 'a') {
                if (e.keyCode != 8) {
                    this.setState({a: this.state.a+String.fromCharCode(e.keyCode)});
                } else {
                    this.setState({a: this.state.a.slice(0, -1)});
                }
            } else {
                if (e.keyCode != 8) {
                    this.setState({b: this.state.b+String.fromCharCode(e.keyCode)});
                } else {
                    this.setState({b: this.state.b.slice(0, -1)});
                }
            }
        }
    },
    add: function() {
        this.setState({output: parseInt(this.state.a) + parseInt(this.state.b)})
    },
    sub: function() {
        this.setState({output: parseInt(this.state.a) - parseInt(this.state.b)})
    },
    mul: function() {
        this.setState({output: parseInt(this.state.a) * parseInt(this.state.b)})
    },
    divide: function() {
        this.setState({output: parseInt(this.state.a) / parseInt(this.state.b)})
    },
    render: function() {
        return (<div>
            <input type="text" id="a" onKeyDown={this.checkValue} value={this.state.a}/>
            <input type="text" id="b" onKeyDown={this.checkValue} value={this.state.b}/>
            <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.mul}>*</button>
                <button onClick={this.divide}>/</button>
            </div>
            <div>{this.state.output}</div>
        </div>)
    }
});
ReactDOM.render(<Calc />, document.getElementById('output'));