/**
 * Created by Incy on 18.09.2016.
 */
import dispatcher from '../dispatcher';

// создать элемент
export function createItem(item) {
    dispatcher.dispatch({
        type: 'CREATE_ITEM',
        item
    })
}

// удалить элемент
export function removeItem(id) {
    dispatcher.dispatch({
        type: 'REMOVE_ITEM',
        id
    })
}