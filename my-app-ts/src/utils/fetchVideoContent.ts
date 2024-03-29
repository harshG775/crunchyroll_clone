// videoFetcher.ts

// Define player settings
const playerSettings = {
    font: "Poppins",
    bgColor: "000000",
    fontColor: "ffffff",
    primaryColor: "34cfeb",
    secondaryColor: "6900e0",
    loader: 1,
    preferredServer: 0,
    sourcesToggleType: 2,
};

// Define types for the parameters
interface FetchVideoContentParams {
    videoId: string;
    isTmdb?: number;
    season?: number;
    episode?: number;
}

// Utility function to fetch video content
export const fetchVideoContent = async ({
    videoId,
    isTmdb = 0,
    season = 0,
    episode = 0,
}: FetchVideoContentParams) => {
    // Construct the request URL
    const requestUrl = `https://getsuperembed.link/?video_id=${videoId}&tmdb=${isTmdb}&season=${season}&episode=${episode}&player_font=${playerSettings.font}&player_bg_color=${playerSettings.bgColor}&player_font_color=${playerSettings.fontColor}&player_primary_color=${playerSettings.primaryColor}&player_secondary_color=${playerSettings.secondaryColor}&player_loader=${playerSettings.loader}&preferred_server=${playerSettings.preferredServer}&player_sources_toggle_type=${playerSettings.sourcesToggleType}`;

    try {
        // Fetch the video content
        const response = await fetch(requestUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const playerUrl = await response.text();

        // Redirect to the video URL or handle the response
        if (playerUrl.startsWith("https://")) {
            window.location.href = playerUrl;
        } else {
            console.error(playerUrl);
        }
    } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
    }
};
