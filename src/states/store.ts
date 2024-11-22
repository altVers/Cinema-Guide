import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './slices/profileSlice'
import authFormReducer from './slices/authFormSlice'

const store = configureStore({
    reducer: {
        profile: profileReducer,
        authForm: authFormReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store