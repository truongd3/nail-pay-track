import { create } from 'zustand';
import { getProfile, saveProfile as persistProfile } from '../db/database';
import { Profile } from '../types/profile';

interface ProfileStore {
    profile: Profile | null;
    isLoaded: boolean;
    loadProfile: () => void;
    saveProfile: (profile: Profile) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
    profile: null,
    isLoaded: false,

    loadProfile: () => {
        const profile = getProfile();
        set({ profile, isLoaded: true });
    },

    saveProfile: (profile) => {
        persistProfile(profile);
        set({ profile });
    },
}));