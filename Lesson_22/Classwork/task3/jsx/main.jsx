var React = require('react');
var ReactDOM = require('react-dom');

class Button extends React.Component {
    constructor(props) {
        super();
        this.state = {a: props.a, b: props.b, c: props.c};

        this.output = this.output.bind(this);
    }
    output() {
        let List = document.createElement('ul');
        List.innerHTML = `<li>${this.state.a}</li><li>${this.state.b}</li><li>${this.state.c}</li>`;
        document.getElementById('output').appendChild(List);
    }
    render() {
        return (<button onClick={this.output}>Click me</button>);
    }
}
ReactDOM.render(<Button a="First" b="Second" c="Third" />, document.getElementById('output'));
