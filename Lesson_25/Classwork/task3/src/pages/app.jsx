/**
 * Created by IncWolf on 18.09.2016.
 */
var React = require('react');

var appStore = require('../Stores/appStore');
var appActions = require('../Actions/appActions');

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            a: '',
            b: '',
            output: ''
        };
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.mul = this.mul.bind(this);
        this.divide = this.divide.bind(this);
        this.checkValue = this.checkValue.bind(this);
    }
    componentWillMount() {
        appStore.on('add', () => {
                this.setState({ output: appStore.add() })
            }
        );
        appStore.on('sub', () => {
                this.setState({output: appStore.sub() })
            }
        );
        appStore.on('mul', () => {
                this.setState({output: appStore.mul() })
            }
        );
        appStore.on('divide', () => {
                this.setState({output: appStore.divide() })
            }
        );
        appStore.on('value', () => {
                this.setState({a: appStore.getA(), b: appStore.getB() })
            }
        )
    }

    add() {
        appActions.add();
    }

    sub() {
        appActions.sub();
    }

    mul() {
        appActions.mul();
    }

    divide() {
        appActions.divide();
    }
    checkValue(e) {
        appActions.checkValue(e);
    }

    render() {
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
}

module.exports = App;