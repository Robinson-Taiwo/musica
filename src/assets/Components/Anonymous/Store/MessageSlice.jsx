import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistConfig from "./ReduxPersistConfig";

const initialState = {
    messages: []
};

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        }
    }
});

const persistedReducer = persistReducer(
    persistConfig,
    messageSlice.reducer
);

export const { addMessage } = messageSlice.actions;
export default persistedReducer;

