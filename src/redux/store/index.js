import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addtofavorite from "../reducers/job";

const bigreducer=combineReducers({
    job:addtofavorite
})
const store = configureStore({
    reducer: bigreducer
})
export default store