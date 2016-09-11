var React = require('react');
var ReactDOM = require('react-dom');

var Parent = React.createClass({
    getInitialState: function() {
        return {
            inputVal: 0
        }
    },

    handler: function(e) {
        console.log("onChange");
        console.log(e.target.value);
        this.setState({inputVal: e.target.value}, function() {
            console.log(this.state.inputVal);
        });
    },
    render: function() {
        return (
            <div>
                <input type="text" defaultValue={this.state.inputVal} onChange={this.handler}/>
                <Child quantity={this.state.inputVal} />
            </div>
        )
    }
});
var Child = React.createClass({
    getDefaultProps: function() {
        return {
            users: [{name:"Anne Montgomery",gender:"Female"},
                {name:"Annie George",gender:"Female"},
                {name:"Gary Butler",gender:"Male"},
                {name:"Lisa Mendoza",gender:"Female"},
                {name:"Marilyn Henry",gender:"Female"},
                {name:"Johnny Tucker",gender:"Male"},
                {name:"Chris Jacobs",gender:"Male"},
                {name:"Benjamin James",gender:"Male"}]
        }
    },
    render: function() {
        var array=[];
        for (var i=0; i<this.props.users.length; i++) {
            if (i<this.props.quantity) {
                array.push(<li key={i}>Name: {this.props.users[i].name}, gender: {this.props.users[i].gender}</li>);
            }
        }
        return (
            <ul>{array}</ul>
        )
    }
});
ReactDOM.render(<Parent />, document.getElementById('output'));