import axios from "axios";
const PUBLIC_TMDB_BASE_URL = process.env.PUBLIC_TMDB_BASE_URL;
const axios_tmdb= axios.create({
	baseURL: PUBLIC_TMDB_BASE_URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
    params: {
        api_key: "c04c4d588ea04e1542849e5b03feadc9"
    }
});
export default axios_tmdb
