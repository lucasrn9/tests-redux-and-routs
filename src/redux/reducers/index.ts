import { combineReducers } from "redux";
import counterReducer from "./counter.reducers";

const rootReducer = combineReducers({counter:counterReducer})

export interface rootState {
    counter:number
}

export default rootReducer;