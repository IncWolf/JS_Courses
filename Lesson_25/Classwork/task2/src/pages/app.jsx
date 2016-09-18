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
            counter: appStore.getInitialCount(),
            status: appStore.getInitialStatus()
        };
        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
        this.step = this.step.bind(this);
    }
    step() {
        this.setState({counter: this.state.counter+1});
    }
    componentDidMount() {
        this.interval = setInterval(this.step, 1000);
    }
    componentDidUpdate() {
        if (this.state.status == 1 && !this.interval) {
            this.interval = setInterval(this.step, 1000);
        } else if (this.state.status == 0) {
            clearInterval(this.interval);
            this.interval = false
        }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    componentWillMount() {
        appStore.on('stop', () => {
                this.setState({ status: 0 })
            }
        );
        appStore.on('reset', () => {
                this.setState({counter: 0})
            }
        );
        appStore.on('start', () => {
                this.setState({status: 1})
            }
        )
    }

    stop() {
        appActions.stop();
    }

    reset() {
        appActions.reset();
    }

    start() {
        appActions.start();
    }

    render() {
        return (
            <div>
                <span>{this.state.counter}</span>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.start}>Start</button>
            </div>
        )}
}

module.exports = App;