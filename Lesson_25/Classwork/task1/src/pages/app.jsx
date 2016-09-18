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
            i: appStore.getInitialStyle()
        };
        this.clickHandler = this.clickHandler.bind(this)
    }


    componentWillMount() {
        appStore.on('styleChange', () => {
                this.setState({ i: appStore.changeStyle() })
            }
        )
    }

    clickHandler() {
        appActions.changeStyle();
    }

    render() {
        return (
            <div className="panel well">
                <button onClick={this.clickHandler}>Click me!</button>
                <div className={this.props.styles[this.state.i]}></div>
            </div>
        )}
}
App.defaultProps = {styles: ["black", "red", "green"]};
module.exports = App;