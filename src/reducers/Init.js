import * as types from '../actions/ActionTypes';
import { Map, List } from 'immutable';

const initialState = Map({
    numbers: List([
        Map({
            selectedNum: 0,
            numbersArr: List([])
        })
    ])
})

function init(state = initialState, action) {
    const numbers = state.get('numbers');
    switch (action.type) {
        case types.ON_SELECT_NUM:
            return state.set('selectedNum', action.num)
        case types.ON_GEN_NUMBERS:
            return state.set('numbers', numbers.push(Map({
                selectedNum: 0,
                numbersArr: action.arr
            })))
        default:
            return state;
    }
}

export default init;