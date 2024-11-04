import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";
import { useTypedDispatch, useTypedSelector } from "../hooks/redux";

const store = configureStore({
	reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

const dispatch = useTypedDispatch();
const logger = useTypedSelector((state: RootState) => state.logger);

store.getState();

export default store;