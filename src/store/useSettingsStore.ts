import { create } from 'zustand';
import { getSettings, saveSettings as persistSettings } from '../db/database';
import { Settings } from '../types/settings';

interface SettingsStore {
    settings: Settings;
    loadSettings: () => void;
    updateSettings: (partial: Partial<Settings>) => void;
}

export const useSettingsStore = create<SettingsStore>((set, get) => ({
    settings: {
        notifications: false,
        emailNotif: false,
        phoneNotif: false,
        reminderTime: '22:00',
        theme: 'light',
    },

    loadSettings: () => set({ settings: getSettings() }),

    updateSettings: (partial) => {
        const updated = { ...get().settings, ...partial };
        persistSettings(updated);
        set({ settings: updated });
    },
}));