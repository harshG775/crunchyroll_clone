"use client";
// StoreProvider.js
import React, { useReducer } from "react";
import storeReducer from "./storeReducer";
import { type_props } from "@/types/type_props";

import { createContext, useContext } from "react";
const storeContext = createContext({} as any);


export default function StoreProvider({ children }: type_props) {
    const initialState = {
        count: 0,
        isSidebarOpen: false,
    };
    return (
        <storeContext.Provider value={useReducer(storeReducer, initialState)}>
            {children}
        </storeContext.Provider>
    );
}



// useStore.js
export function useStore() {
    return useContext(storeContext);
}
