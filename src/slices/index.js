import { combineReducers } from "redux";

import nhovvReducer from "./nhovv";
import sangncReducer from "./sangnc";
import vulqReducer from "./vulq";
import khoabvReducer from './khoabv'    
    const rootReducer = combineReducers({
    sangnc: sangncReducer,
    nhovv: nhovvReducer,
    vulq: vulqReducer,
    khoabv: khoabvReducer,
});

export default rootReducer;
