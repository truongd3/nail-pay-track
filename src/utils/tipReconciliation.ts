import { Entry } from '../types/entry';

function getPayoutDate(entryDate: Date): Date {
    const year = entryDate.getFullYear();
    const month = entryDate.getMonth();
    const day = entryDate.getDate();

    if (day <= 15) return new Date(year, month, 15);
    // last day of the month
    return new Date(year, month + 1, 0);
}

export interface TipReconciliation {
    received: number;
    unpaid: number;
}

export function reconcileTips(entries: Entry[], today: Date = new Date()): TipReconciliation {
    let received = 0;
    let unpaid = 0;

    for (const entry of entries) {
        const entryDate = new Date(entry.date + 'T00:00:00');
        const payoutDate = getPayoutDate(entryDate);

        if (today >= payoutDate) received += entry.tip;
        else unpaid += entry.tip;
    }

    return { received, unpaid };
}