/**
 * Created by IncWolf on 18.09.2016.
 */
var React = require('react');

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div>
            <p>Id: {this.props.params.id}</p>
            <p>First name: {this.props.location.query.first_name}</p>
            <p>Last name: {this.props.location.query.last_name}</p>
            <p>Email: {this.props.location.query.email}</p>
            <p>Gender: {this.props.location.query.gender}</p>
            <p>Ip: {this.props.location.query.ip}</p>
        </div>)}
}

module.exports = User;