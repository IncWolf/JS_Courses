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
        ]
    }

    createItem(item) {
        this.tasks.push({
            id: `${Date.now()}`,
            name: item.name,
            complete: item.complete
        })
    }

    // удалить элемент
    removeItem(id) {

        var newData = [];
        for ( var i = 0; i < this.tasks.length; i++ ) {

            if ( this.tasks[i].id === id ) {
                continue;
            }
            newData.push(this.tasks[i])
        }
        this.tasks = newData;
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
        }

    }
}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

module.exports = todoStore;