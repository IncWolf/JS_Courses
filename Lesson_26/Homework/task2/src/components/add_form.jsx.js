/**
 * Created by Incy on 19.09.2016.
 */
var React = require('react');

class AddForm extends React.Component {
    render() {
        return (<div>
            <input type="text" id="title" />
            <input type="checkbox" id="complete"/>
            <button onClick={this.props.clickHandler}>Add new task</button>
        </div>)
    }
}
module.exports = AddForm;