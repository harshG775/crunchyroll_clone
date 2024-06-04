import { create } from "zustand";

type PlayerStateType = {
    currentSeason: number;
    setCurrentSeason: (season: number) => void;

    currentEpisode: number;
    setCurrentEpisode: (episode: number) => void;
};

export const playerState = create<PlayerStateType>((set) => ({
    currentSeason: 1,
    setCurrentSeason: (season) => set({ currentSeason: season }),

    currentEpisode: 1,
    setCurrentEpisode: (episode) => set({ currentEpisode: episode }),
}));
