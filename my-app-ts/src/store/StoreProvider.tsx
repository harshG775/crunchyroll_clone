"use client"
import { useReducer } from "react";
import storeContext from "./storeContext";
import storeReducer from "./storeReducer";

export default function StoreProvider(prop) {
    const initialState = {
        count: 1,
    };
    return (
        <storeContext.Provider value={useReducer(storeReducer, initialState)}>
            {prop.children}
        </storeContext.Provider>
    );
}
