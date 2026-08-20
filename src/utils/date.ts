export function toLocalDateString(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function getTodayLocal(): string {
    return toLocalDateString(new Date());
}

export function getCurrentMonthLocal(): string {
    return toLocalDateString(new Date()).slice(0, 7); // "YYYY-MM"
}