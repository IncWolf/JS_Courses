/**
 * Created by IncWolf on 18.09.2016.
 */
import dispatcher from '../dispatcher'

export function add() {
    dispatcher.dispatch({ type: 'ADD'})
}

export function mul() {
    dispatcher.dispatch({ type: 'MUL'})
}

export function sub() {
    dispatcher.dispatch({ type: 'SUB'})
}

export function divide() {
    dispatcher.dispatch({ type: 'DIVIDE'})
}

export function checkValue(e) {
    dispatcher.dispatch({ type: 'VALUE', e})
}