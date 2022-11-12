import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import members from './member';
const reducer = combineReducers({
  members,
})
const store = configureStore({
  reducer,
})
export default store;