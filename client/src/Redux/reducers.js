import notificationReducer from "./notification/reducers";
import settingReducer from "./setting/reducer";
import userReducer from "./user/reducers";
import { combineReducers } from 'redux';

// const { combineReducers } = require("redux");


export const rootReducer = combineReducers(
    {
        user:userReducer,
        setting:settingReducer,
        notification:notificationReducer,
    }
)
