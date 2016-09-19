/**
 * Created by galushkasergiy on 19.09.16.
 */
var React = require ('react');

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table><thead><tr><th>Id</th><th>Title</th><th>Complete</th></tr></thead><tbody>
                {this.props.items.map((item) => {
                    return(<tr key={item.id}><td>{item.id}</td><td>{item.title}</td><td>{item.complete?'YES':'NO'}</td><td> <a data-id={item.id} onClick={this.props.deleteHandler}>DELETE</a></td></tr>);
                })}
            </tbody></table>
        )
    }
}

module.exports = Table;