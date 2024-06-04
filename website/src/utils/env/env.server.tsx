import { z } from "zod";

// server env
const envSchema = z.object({
    TMDB_TOKEN:z.string(),
    TMDB_BASE_URL:z.string(),
    TMDB_API_KEY:z.string(),
    IFRAME_BASE_URL:z.string(),
});
export const envServer = envSchema.parse(process.env);
