import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
    auth: authSlice
})

export const store = configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
