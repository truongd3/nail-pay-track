export interface Entry {
    id: number;
    date: string;       // ISO format: "2026-08-09"
    money: number;       // dollars, stored as number
    tip: number;
    createdAt: string;
}

export interface MonthlySummary {
    month: string;        // "2026-08"
    totalMoney: number;
    totalTip: number;
    totalWage: number;    // money + tip
}