/**
 * Created by IncWolf on 17.09.2016.
 */
import {users} from '../../task2/jsx/main.jsx'
var React = require('react');
var ReactDOM = require('react-dom');
class TableOfUsers extends React.Component {
    constructor() {
        super();
        this.users = users;
    }
    render() {
        let array=[];
        for (var i=0; i<this.users.length; i++) {
            array.push(<tr key={i}><td>{this.users[i].firstName}</td><td>{this.users[i].lastName}</td><td>{this.users[i].age}</td><td>{this.users[i].gender}</td><td>{this.users[i].signUpDate}</td><td>{this.users[i].id}</td></tr>);
        }
        return(<table><thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Gender</th><th>Signup Date</th><th>id</th></tr></thead><tbody>{array}</tbody></table>)
    }
}
ReactDOM.render(<TableOfUsers/>, document.getElementById('output'));