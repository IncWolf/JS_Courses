/**
 * Created by IncWolf on 18.09.2016.
 */
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.i = 0
    }

    getInitialStyle() {
        return this.i
    }

    changeStyle() {
        return Math.floor(Math.random()*3);
    }

    handleActions(action) {

        switch (action.type) {
            case "CHANGE": {
                this.emit('styleChange')
                break;
            }
        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;