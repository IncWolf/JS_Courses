/**
 * Created by Incy on 18.09.2016.
 */
var React = require('react');

// импорт действий toDoActions
var TodoActions = require('../actions/toDoActions');

class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // создание списка заданий на основе props
        return(
            <ul>
                {this.props.items.map((item) => {
                    return <li key={item.id}>{item.name} &nbsp;
                        <div>
                            <button data-id={item.id} onClick={this.props.removeHandler}>Delete</button>
                        </div>
                    </li>

                })}
            </ul>
        )}
}

module.exports = List;