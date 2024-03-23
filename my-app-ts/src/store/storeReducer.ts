// storeReducer.js
"use client";
import storeAction from "./storeAction";

export default function storeReducer(state: any, action: any) {
    const { type, payload } = action;
    switch (type) {
        case storeAction.INCREMENT:
            return {
                ...state,
                count: payload,
            };
        default:
            throw new Error();
    }
}
