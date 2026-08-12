import * as SQLite from 'expo-sqlite';
import { Entry } from '../types/entry';

const db = SQLite.openDatabaseSync('nailpay.db');

export function initDatabase() {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS entries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL UNIQUE,
            money REAL NOT NULL,
            tip REAL NOT NULL,
            createdAt TEXT NOT NULL
        );
    `);
}

export function upsertEntry(date: string, money: number, tip: number) {
    db.runSync(
        `INSERT INTO entries (date, money, tip, createdAt)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(date) DO UPDATE SET money=excluded.money, tip=excluded.tip`,
        [date, money, tip, new Date().toISOString()]
    );
}

export function getRecentEntries(limit: number = 20): Entry[] {
    return db.getAllSync<Entry>(
        `SELECT * FROM entries ORDER BY date DESC LIMIT ?`,
        [limit]
    );
}

export function getMonthlySummary(yearMonth: string) {
    const result = db.getFirstSync<{ totalMoney: number; totalTip: number }>(
        `SELECT COALESCE(SUM(money), 0) as totalMoney,
                COALESCE(SUM(tip), 0) as totalTip
        FROM entries
        WHERE date LIKE ?`,
        [`${yearMonth}%`]
    );
    return result;
}

export function clearAllEntries() {
    db.execSync(`DELETE FROM entries;`);
}

export function deleteEntry(id: number) {
    db.runSync(`DELETE FROM entries WHERE id = ?`, [id]);
}

export function getAllEntries(): Entry[] {
    return db.getAllSync<Entry>(`SELECT * FROM entries ORDER BY date DESC`);
}

export interface MonthlyStat {
    month: string;       // "2026-08"
    totalMoney: number;
    totalTip: number;
}

export function getMonthlyStats(): MonthlyStat[] {
    return db.getAllSync<MonthlyStat>(`
        SELECT substr(date, 1, 7) as month, SUM(money) as totalMoney, SUM(tip) as totalTip
        FROM entries
        GROUP BY month
        ORDER BY month DESC
    `);
}

export function updateEntry(id: number, money: number, tip: number) {
    db.runSync(
        `UPDATE entries SET money = ?, tip = ? WHERE id = ?`,
        [money, tip, id]
    );
}