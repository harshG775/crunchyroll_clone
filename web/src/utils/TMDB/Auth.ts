import { Axios_tmdb } from "@/lib/Axios_server";
/* step 1: get request token */
export async function createRequestToken() {
    const { data } = await Axios_tmdb.get("/authentication/token/new");
    return data;
}

/* step 2: get session id */
export async function createSession(requestToken: string) {
    const { data } = await Axios_tmdb.post("/authentication/session/new", {
        request_token: requestToken,
    });
    return data;
}

/* step 3: get session id */
// currently not working
export async function createSession_withLogin(sessionId: string) {
    const { data } = await Axios_tmdb.post("/token/validate_with_login", {
        session_id: sessionId,
    });
    return data;
}
