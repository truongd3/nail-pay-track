import { create } from 'zustand';
import { getRecentEntries, getMonthlySummary, upsertEntry, deleteEntry } from '../db/database';
import { Entry } from '../types/entry';

interface EntryStore {
    recentEntries: Entry[];
    monthTotal: number;
    monthTips: number;
    saveEntry: (money: number, tip: number) => void;
    removeEntry: (id: number) => void;
    refresh: () => void;
}

export const useEntryStore = create<EntryStore>((set, get) => ({
    recentEntries: [],
    monthTotal: 0,
    monthTips: 0,

    removeEntry: (id) => {
        deleteEntry(id);
        get().refresh();
    },

    saveEntry: (money, tip) => {
        const today = new Date().toISOString().split('T')[0];
        upsertEntry(today, money, tip);
        get().refresh();
    },

    refresh: () => {
        const entries = getRecentEntries(20);
        const currentMonth = new Date().toISOString().slice(0, 7);
        const summary = getMonthlySummary(currentMonth);
        set({
            recentEntries: entries,
            monthTotal: (summary?.totalMoney ?? 0),
            monthTips: summary?.totalTip ?? 0,
        });
    },
}));