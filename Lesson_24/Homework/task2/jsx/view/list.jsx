/**
 * Created by IncWolf on 18.09.2016.
 */
var React = require('react');

class ListView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<ul>
            {this.props.route.users.map(function(user, i){
                return (<li key={i}>{user.first_name} {user.last_name}</li>)
            })}
           </ul>)}
}

module.exports = ListView;
