/**
 * Created by Incy on 18.09.2016.
 */
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher'

class ToDoStore extends EventEmitter {
    constructor() {
        super();
        this.tasks = [
            {
                id: `${Date.now()}`,
                name: 'Clean the house',
                complete: false

            },
            {
                id: `${Date.now()}` + 1,
                name: 'Watch TV',
                complete: true
            }
        ];
        this.previousState = this.tasks;
    }

    createItem(item) {
        this.tasks = this.previousState;
        console.log(this.tasks);
        this.tasks.push({
            id: `${Date.now()}`,
            name: item.name,
            complete: item.complete
        });
        this.previousState = this.tasks;
    }

    // удалить элемент
    removeItem(id) {
        this.tasks = this.previousState;
        var newData = [];
        for ( var i = 0; i < this.tasks.length; i++ ) {

            if ( this.tasks[i].id === id ) {
                continue;
            }
            newData.push(this.tasks[i])
        }
        this.tasks = newData;
        this.previousState = this.tasks;
    }

    filterItems(string) {
        if (string != '') {
            this.previousState = this.tasks;
            var newData = [];
            for ( var i = 0; i < this.tasks.length; i++ ) {

                if (this.filter(this.tasks[i].name.split(' '), string)) {
                    newData.push(this.tasks[i])
                }
            }
            this.tasks = newData;
        } else {
            console.log(this.previousState);
            this.tasks = this.previousState
        }
    }
    filter(strings, search) {
        for (var i=0; i<strings.length; i++) {
            console.log(strings);
            if (strings[i] == search) {
                return true;
            }
        }
        return false;
    }
    // получить все элементы
    getAll() {  return this.tasks  }

    // обработка actions
    handleActions(action) {
        switch(action.type) {
            case "CREATE_ITEM": {
                console.log('Item created');
                this.createItem(action.item);
                this.emit('CHANGE');
                break;
            }
            case "REMOVE_ITEM": {
                console.log('Item removed');
                this.removeItem(action.id);
                this.emit('CHANGE');
                break;
            }
            case "SEARCH": {
                console.log("Filter Items");
                this.filterItems(action.string);
                this.emit('CHANGE');
                break;
            }
        }

    }
}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

module.exports = todoStore;