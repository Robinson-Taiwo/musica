import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistConfig from "./ReduxPersistConfig";

const initialState = {
    messages: [],
    clues: {}, // Initialize clues state
    user: null, // Initialize user state
    isLoggedIn: false,
};

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        setUserInfo: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true; // Update isLoggedIn to true when user is set
        },

        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        // You can add more reducers to update user information if needed
    },
});

const persistedReducer = persistReducer(
    persistConfig,
    messageSlice.reducer
);

export const { addMessage, setUserInfo, logout } = messageSlice.actions;
export default persistedReducer;
