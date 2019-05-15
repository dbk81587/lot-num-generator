import * as types from './ActionTypes';

export const onSelectNum = (num) => ({
    type: types.ON_SELECT_NUM,
    num
})

export const onGenNumbers = (arr) => ({
    type: types.ON_GEN_NUMBERS,
    arr
})