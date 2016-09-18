/**
 * Created by IncWolf on 17.09.2016.
 */
import React from 'react';

export default class Table extends React.Component {
    constructor(props) {
        super();
        this.state = {users: [{name: 'Nick', age: 25, gender: 'male'}, {name: 'Clarisa', age: 22, gender: 'female'}]}

        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        let user = {name: 'Sergey', age: 25, gender: 'male'};
        this.setState({users: this.state.users.concat(user)});
    }
    render() {
        return(<div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map(function(user, i) {
                    return (<tr key={i}><td>{user.name}</td><td>{user.age}</td><td>{user.gender}</td></tr>)
                })}
                </tbody>
            </table>
            <div onClick={this.clickHandler}>{this.props.children}</div>
        </div>);
    }
}