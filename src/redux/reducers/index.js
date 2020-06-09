import { combineReducers } from "redux";
import boardReducer from "./boardReducer"
import landReducer from "./landReducer"


const rootReducer =  combineReducers({ boardReducer, landReducer });

export default rootReducer;
