/**
 * Created by IncWolf on 18.09.2016.
 */
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.state = {
            a: '',
            b: ''
        }
    }

    add() {
        return parseInt(this.state.a) + parseInt(this.state.b)
    }
    sub() {
        return parseInt(this.state.a) - parseInt(this.state.b)
    }
    mul() {
        return parseInt(this.state.a) * parseInt(this.state.b)
    }
    divide() {
        return parseInt(this.state.a) / parseInt(this.state.b)
    }
    setValue(e) {
        if ((e.keyCode <= 57 && e.keyCode >= 48) || e.keyCode == 8) {
            if (e.target.getAttribute('id') == 'a') {
                if (e.keyCode != 8) {
                    this.setState({a: this.state.a+String.fromCharCode(e.keyCode)});
                } else {
                    this.setState({a: this.state.a.slice(0, -1)});
                }
            } else {
                if (e.keyCode != 8) {
                    this.setState({b: this.state.b+String.fromCharCode(e.keyCode)});
                } else {
                    this.setState({b: this.state.b.slice(0, -1)});
                }
            }
        }
    }
    getA() {
        return this.state.a;
    }
    getB() {
        return this.state.b;
    }

    handleActions(action) {

        switch (action.type) {
            case "ADD": {
                this.emit('stop')
                break;
            }
            case "MUL": {
                this.emit('start')
                break;
            }
            case "DIVIDE": {
                this.emit('reset')
                break;
            }
            case "SUB": {
                this.emit('sub');
                break;
            }
            case "VALUE": {
                this.emit('value');
                this.setValue(action.e);
                break;
            }
        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;