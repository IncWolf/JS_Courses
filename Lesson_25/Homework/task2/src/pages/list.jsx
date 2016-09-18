/**
 * Created by Incy on 18.09.2016.
 */
var React = require('react');

// импорт действий toDoActions
var TodoActions = require('../actions/toDoActions');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.removeHandler = this.removeHandler.bind(this);
    }
    removeHandler(e) {
        TodoActions.removeItem(e.target.dataset.id);
    }
    render() {
        // создание списка заданий на основе props
        return(
            <ul>
                {this.props.items.map((item) => {
                    return <li key={item.id}>{item.name} &nbsp; {item.complete?'Complete':'Not complete'}&nbsp;<button data-id={item.id} onClick={this.removeHandler}>Delete</button></li>
                })}
            </ul>
        )}
}

module.exports = List;