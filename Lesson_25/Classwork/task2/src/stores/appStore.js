/**
 * Created by IncWolf on 18.09.2016.
 */
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.count = 0;
        this.status = 1
    }

    getInitialStatus() {
        return this.status
    }

    getInitialCount() {
        return this.count
    }

    handleActions(action) {

        switch (action.type) {
            case "STOP": {
                this.emit('stop')
                break;
            }
            case "START": {
                this.emit('start')
                break;
            }
            case "RESET": {
                this.emit('reset')
                break;
            }
        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;