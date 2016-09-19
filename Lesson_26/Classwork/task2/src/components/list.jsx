/**
 * Created by galushkasergiy on 19.09.16.
 */
var React = require('react');

class List extends React.Component {

    render() {
        return (
            <ul className={this.props.show?'show':'hide'}>
                {this.props.users.map(function(user, i) {
                    return(<li key={i}>{user.name}, {user.age} </li>)
                    })}
            </ul>
        )}
}

module.exports = List;