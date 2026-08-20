import { create } from 'zustand';
import { getSalon, saveSalon as persistSalon } from '../db/database';
import { Salon } from '../types/salon';

interface SalonStore {
    salon: Salon | null;
    loadSalon: () => void;
    saveSalon: (salon: Salon) => void;
}

export const useSalonStore = create<SalonStore>((set) => ({
    salon: null,
    loadSalon: () => set({ salon: getSalon() }),
    saveSalon: (salon) => {
        persistSalon(salon);
        set({ salon });
    },
}));