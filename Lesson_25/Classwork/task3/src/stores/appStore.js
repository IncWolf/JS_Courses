/**
 * Created by IncWolf on 18.09.2016.
 */
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.a = '';
        this.b = '';
    }

    add() {
        return parseInt(this.a) + parseInt(this.b)
    }
    sub() {
        return parseInt(this.a) - parseInt(this.b)
    }
    mul() {
        return parseInt(this.a) * parseInt(this.b)
    }
    divide() {
        return parseInt(this.a) / parseInt(this.b)
    }
    setValue(e) {
        if ((e.keyCode <= 57 && e.keyCode >= 48) || e.keyCode == 8) {
            if (e.target.getAttribute('id') == 'a') {
                if (e.keyCode != 8) {
                    this.a = this.a+String.fromCharCode(e.keyCode);
                } else {
                    this.a = this.a.slice(0, -1);
                }
            } else {
                if (e.keyCode != 8) {
                    this.b = this.b+String.fromCharCode(e.keyCode);
                } else {
                    this.b = this.b.slice(0, -1);
                }
            }
        }
    }
    getA() {
        return this.a;
    }
    getB() {
        return this.b;
    }

    handleActions(action) {

        switch (action.type) {
            case "ADD": {
                this.emit('add')
                break;
            }
            case "MUL": {
                this.emit('mul')
                break;
            }
            case "DIVIDE": {
                this.emit('divide')
                break;
            }
            case "SUB": {
                this.emit('sub');
                break;
            }
            case "VALUE": {
                this.setValue(action.e);
                this.emit('value');
                break;
            }
        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;