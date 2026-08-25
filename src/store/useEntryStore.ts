import { create } from 'zustand';
import { getRecentEntries, getMonthlySummary, upsertEntry, deleteEntry, updateEntry } from '../db/database';
import { Entry } from '../types/entry';
import { getTodayLocal, getCurrentMonthLocal } from '../utils/date';
import { calculateWageExcludingTip, getCurrentSplitPercent } from '../utils/wage';

interface EntryStore {
    recentEntries: Entry[];
    monthTotal: number;
    monthTips: number;
    saveEntry: (money: number, tip: number) => void;
    removeEntry: (id: number) => void;
    refresh: () => void;
    editEntry: (id: number, money: number, tip: number) => void;
    addEntryForDate: (date: string, money: number, tip: number) => void;
}

export const useEntryStore = create<EntryStore>((set, get) => ({
    recentEntries: [],
    monthTotal: 0,
    monthTips: 0,

    saveEntry: (money, tip) => {
        const today = getTodayLocal();
        upsertEntry(today, money, tip);
        get().refresh();
    },

    removeEntry: (id) => {
        deleteEntry(id);
        get().refresh();
    },

    refresh: () => {
        const entries = getRecentEntries(20);
        const currentMonth = getCurrentMonthLocal();
        const summary = getMonthlySummary(currentMonth);
        const splitPercent = getCurrentSplitPercent();
        set({
            recentEntries: entries,
            monthTotal: calculateWageExcludingTip(summary?.totalMoney ?? 0, splitPercent),
            monthTips: summary?.totalTip ?? 0,
        });
    },

    editEntry: (id, money, tip) => {
        updateEntry(id, money, tip);
        get().refresh();
    },

    addEntryForDate: (date, money, tip) => {
        upsertEntry(date, money, tip);
        get().refresh();
    },
}));