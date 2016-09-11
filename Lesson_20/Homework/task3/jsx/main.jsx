var React = require('react');
var ReactDOM = require('react-dom');

var Parent = React.createClass({
    getInitialState: function() {
        return {
            inputVal: 0,
            isList: true
        }
    },
    handler: function(e) {
        this.setState({inputVal: e.target.value})
    },
    changeMode: function() {
        this.setState({isList: !this.state.isList})
    },
    render: function() {
        return (
            <div>
                <input type="text" defaultValue={this.state.inputVal} onChange={this.handler}/>
                <input type="checkbox" defaultChecked={this.state.isList} onChange={this.changeMode} /> List Mode
                <Child quantity={this.state.inputVal} isList={this.state.isList}/>
            </div>
        )
    }
});
var Child = React.createClass({
    getInitialState: function() {
        return {
            color: 'black'
        }
    },
    getRandomColor: function() {
        var h = Math.floor(Math.random() * (255 - 1) + 1);
        var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
        var l = '50%';
        return 'hsl(' + h + ',' + s + ',' + l + ')';
    },
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
    componentWillReceiveProps: function() {
        this.setState({color: this.getRandomColor()})
    },
    render: function() {
        var array=[];
        for (var i=0; i<this.props.users.length; i++) {
            if (i<this.props.quantity) {
                if (this.props.isList) {
                    array.push(<li key={i} style={{color: this.state.color}}>Name: {this.props.users[i].name}, gender: {this.props.users[i].gender}</li>);
                } else {
                    array.push(<tr key={i} style={{color: this.state.color}}><td>{this.props.users[i].name}</td><td>{this.props.users[i].gender}</td></tr>);
                }
            }
        }
        if (this.props.isList) {
            return (<ul>{array}</ul>)
        } else {
            return (<table><thead><tr><th>Name</th><th>Gender</th></tr></thead><tbody>{array}</tbody></table>)
        }
    }
});
ReactDOM.render(<Parent />, document.getElementById('output'));