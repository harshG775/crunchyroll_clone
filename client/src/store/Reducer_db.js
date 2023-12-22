// Reducer_db.jsx
export const Actions = {
	TOGGLE_MENU: "toggle_menu",
};
export default function Reducer_db(state, { actionType, payload }) {
	switch (actionType) {
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
