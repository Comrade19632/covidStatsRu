import {CHANGE_COUNTRY, CHANGE_DATATYPE, CHANGE_GRAPHTYPE} from "./types";

const initialState = {
    countryName: 'Весь мир',
    dataType: 'Подтвержденные случаи',
    graphType: 'Гистограмма'
}

export const selectReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COUNTRY:
            return {...state, countryName: action.payload}
        case CHANGE_DATATYPE:
            return {...state, dataType: action.payload}
        case CHANGE_GRAPHTYPE:
            return {...state, graphType: action.payload}
        default:
            return state
    }
    return state;
}