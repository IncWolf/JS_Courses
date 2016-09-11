var React = require('react');
var ReactDOM = require('react-dom');

var Butt = React.createClass({
    getInitialState: function() {
        return {
            color: true
        }
    },
    handler: function() {
        this.setState({color: !this.state.color})
    },
   render: function() {
       return (<div><button onClick={this.handler}>Change</button><div style={{width: 100+'px', height: 100+'px', backgroundColor: this.state.color?'red':'black'}}></div></div>)
   }
});
ReactDOM.render(<Butt />, document.getElementById('output'));