import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addtofavorite from "../reducers/job";
import addjob from "../reducers/getinfo";


const bigreducer=combineReducers({
    job:addtofavorite,
    finjob:addjob
})
const store = configureStore({
    reducer: bigreducer
})
export default store