/**
 * Created by IncWolf on 18.09.2016.
 */
var React = require('react');
import {Link} from 'react-router';

class TableView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<table><thead><tr><th>First name</th><th>Last Name</th><th>Gender</th></tr></thead>
        <tbody>
        {this.props.route.users.map(function(user, i){
            return (<tr key={i}><td><Link to={{pathname: '/listView/'+user.id, query: {first_name: user.first_name, last_name: user.last_name, email: user.email, ip: user.ip_address, gender: user.gender}}}>{user.first_name}</Link></td><td>{user.last_name}</td><td>{user.gender}</td></tr>)
        })}
        </tbody></table>)}
}

module.exports = TableView;