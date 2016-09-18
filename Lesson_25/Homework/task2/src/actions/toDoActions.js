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

export function searchItems(string) {
    dispatcher.dispatch({
        type: 'SEARCH',
        string
    })
}

// удалить элемент
export function removeItem(id) {
    dispatcher.dispatch({
        type: 'REMOVE_ITEM',
        id
    })
}