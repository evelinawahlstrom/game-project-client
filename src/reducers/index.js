import { combineReducers } from "redux"
import auth from './auth'
import gameReducer from './GameReducer'


export default combineReducers({
    auth,
    gameReducer
 })