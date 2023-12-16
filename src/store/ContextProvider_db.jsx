//ContextProvider_db.jsx

import { useReducer } from "react";
import Context_db from "./Context_db";
import Reducer_db from "./Reducer_db";
export default function ContextProvider_db(prop) {
	const initialState = {
		isOpen: false,
	};
	return (
		<Context_db.Provider value={useReducer(Reducer_db, initialState)}>
			{prop.children}
		</Context_db.Provider>
	);
}
