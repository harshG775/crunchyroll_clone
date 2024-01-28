// Reducer_db.jsx
export const Actions = {
	TOGGLE_MENU: "TOGGLE_MENU",
    TOGGLE_SIDEBAR:"TOGGLE-SIDEBAR"
};
export default function Reducer_db(state, { actionType, payload }) {
	switch (actionType) {
        case Actions.TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: payload,
            };
		case Actions.TOGGLE_MENU:
			return {
				...state,
				isOpen: payload,
			};

		// default:
		//   throw new Error();

		default:
			return state;
	}
}
