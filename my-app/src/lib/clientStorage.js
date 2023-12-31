const isClient = typeof window !== "undefined";

const message = () => {
	return "Cannot access storage on server.";
};

export default class clientStorage {
	static getItem(key) {
		if (isClient) {
			return JSON.parse(localStorage.getItem(key)) || undefined;
		} else {
			message();
		}
	}

	static setItem(key, value) {
		if (isClient) {
			localStorage.setItem(key, JSON.stringify(value));
		} else {
			message();
		}
	}

	static removeItem(key) {
		if (isClient) {
			localStorage.removeItem(key);
		} else {
			message();
		}
	}

	static clear() {
		if (isClient) {
			localStorage.clear();
		} else {
			message();
		}
	}

	static all() {
		if (isClient) {
			const allItems = {};

			for (let i = 0; i < localStorage.length; i++) {
				const key = localStorage.key(i);

				const value = localStorage.getItem(key);

				allItems[key] = value;
			}

			return allItems;
		} else {
			message();
		}
	}
}
