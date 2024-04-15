export default function useLocalStorage() {
    const setItem = (key: string, value: string | object) => {
        try {
            if (typeof value === "object") {
                value = JSON.stringify(value);
            }
            window.localStorage.setItem(key, value);
            return true;
        } catch (error) {
            console.log(error);
        }
    };
    const getItem = (key: string) => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.log(error);
        }
    };
    const removeItem = (key: string) => {
        try {
            window.localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.log(error);
        }
    };
    return { setItem, getItem, removeItem };
}

import { useEffect, useState } from "react";
export function useClient() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return isClient;
}
