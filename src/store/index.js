import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import scoreSliceReducer from './score';

const reducer = combineReducers({
    score: scoreSliceReducer,
  // here we will be adding reducers
})
const store = configureStore({
  reducer,
})
export default store;