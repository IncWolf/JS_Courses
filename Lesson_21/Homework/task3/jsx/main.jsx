/**
 * Created by IncWolf on 14.09.2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Form = React.createClass({
    getInitialState: function() {
        return {
            nameError: 'none',
            emailError: 'none',
            telError: 'none',
        }
    },
    valueCheck: function(e) {
        var telTest = /^([0-9 ]*)$/;
        var nameTest = /^([a-zA-Z ]*)$/;
        var emailTest = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        var target_id = e.target.getAttribute('id');
        switch (target_id) {
            case 'name':
                if (document.getElementById(target_id).value.search(nameTest) != -1) {
                    this.setState({nameError: 'none'});
                } else {
                    if (!document.getElementById(target_id).value) {
                        this.setState({nameError: 'none'});
                    } else {
                        this.setState({nameError: 'block'});
                    }
                }
                break;
            case 'email':
                if (document.getElementById(target_id).value.search(emailTest) != -1) {
                    this.setState({emailError: 'none'});
                } else {
                    if (!document.getElementById(target_id).value) {
                        this.setState({emailError: 'none'});
                    } else {
                        this.setState({emailError: 'block'});
                    }
                }
                break;
            case 'tel':
                if (document.getElementById(target_id).value.search(telTest) != -1) {
                    this.setState({telError: 'none'});
                } else {
                    if (!document.getElementById(target_id).value) {
                        this.setState({telError: 'none'});
                    } else {
                        this.setState({telError: 'block'});
                    }
                }
                break;
        }
    },
    render: function() {
        return (<form>
            <div><label htmlFor="name">Name: </label><input id="name" type="text" onInput={this.valueCheck}/><p className="error" style={{display: this.state.nameError}}>Only letters required</p></div>
            <div><label htmlFor="name">Email: </label><input id="email" type="text" onInput={this.valueCheck}/><p className="error" style={{display: this.state.emailError}}>Only valid email required</p></div>
            <div><label htmlFor="name">Tel: </label><input id="tel" type="text" onInput={this.valueCheck}/><p className="error" style={{display: this.state.telError}}>Only numbers required</p></div>
            <div><label htmlFor="name">Message: </label><input id="message" type="text"/></div>
        </form>)
    }
});
ReactDOM.render(<Form />, document.getElementById('output'));