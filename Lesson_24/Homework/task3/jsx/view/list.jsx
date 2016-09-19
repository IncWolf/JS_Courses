/**
 * Created by IncWolf on 18.09.2016.
 */
var React = require('react');
import {Link} from 'react-router';

class ListView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<ul>
            {this.props.route.users.map(function(user, i){
                return (<li key={i}><Link to={{pathname: '/listView/'+user.id, query: {first_name: user.first_name, last_name: user.last_name, email: user.email, ip: user.ip_address, gender: user.gender}}}>{user.first_name} {user.last_name}</Link></li>)
            })}
           </ul>)}
}

module.exports = ListView;
