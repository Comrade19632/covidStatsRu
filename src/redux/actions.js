import {CHANGE_COUNTRY, CHANGE_DATATYPE, CHANGE_GRAPHTYPE} from "./types";

export function changeCountry(countryName) {
    return {
        type: CHANGE_COUNTRY,
        payload: countryName
    }
}
export function changeDataType(dataType) {
    return {
        type:CHANGE_DATATYPE,
        payload:dataType
    }
}
export function changeGraphType(graphType) {
    return {
        type:CHANGE_GRAPHTYPE,
        payload:graphType
    }
}