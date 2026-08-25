import { useSalonStore } from '../store/useSalonStore';

export function getCurrentSplitPercent(): number {
    const salon = useSalonStore.getState().salon;
    return salon?.splitPercent ?? 100;
}

export function calculateWageExcludingTip(money: number, splitPercent: number) {
    return money * (splitPercent / 100);
}

export function calculateWage(money: number, tip: number, splitPercent: number): number {
    return calculateWageExcludingTip(money, splitPercent) + tip;
}