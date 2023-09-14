import {combineReducers, legacy_createStore} from "redux";
import {usersCountReducer, usersReducer} from "./reducers";

const rootReduser=combineReducers({
    usersReducer: usersReducer,
    userCount: usersCountReducer
})

export const store = legacy_createStore(rootReduser)

export type RootStoreType = ReturnType<typeof rootReduser>
