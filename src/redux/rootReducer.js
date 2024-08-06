import { combineReducers } from "redux";
import { cardDataReducer, showHorizonalReducer, showVerticalReducer } from "./reducer";

const rootReducer = combineReducers(
 {
    cardDataReducer:cardDataReducer,
    showHorizonalReducer:showHorizonalReducer,
    showVerticalReducer:showVerticalReducer
 }
)

export default rootReducer