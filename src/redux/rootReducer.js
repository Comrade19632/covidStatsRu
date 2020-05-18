import {combineReducers} from "redux";
import {selectReducer} from "./selectReducer.";

export const rootReducer = combineReducers(
    {
        select: selectReducer
    }
);
