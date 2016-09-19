/**
 * Created by galushkasergiy on 19.09.16.
 */
var React = require ('react');


class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {this.props.items.map((item) => {
                    return(<li key={item.id}>{item.title} {item.complete?'YES':'NO'} <a data-id={item.id} onClick={this.props.deleteHandler}>DELETE</a></li>);
                })}
            </ul>
        )
    }
}

module.exports = List;