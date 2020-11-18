import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import sentenceReducer from '../features/sentenceSlice';
import questionReducer from '../features/questionsSlice';
import modalReducer from '../features/modalSlice'
import logger from 'redux-logger'



const middleware =[...getDefaultMiddleware(), logger]
export default configureStore({
    reducer: {
        sentencer: sentenceReducer,
        questioner: questionReducer,
        modaler: modalReducer
    },
    middleware
})