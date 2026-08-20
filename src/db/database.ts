import * as SQLite from 'expo-sqlite';
import { Entry } from '../types/entry';
import { Profile } from '../types/profile';
import { Salon } from '../types/salon';

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

    db.execSync(`
        CREATE TABLE IF NOT EXISTS profile (
            id INTEGER PRIMARY KEY CHECK (id = 1),
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            country TEXT NOT NULL,
            region TEXT NOT NULL,
            avatarUri TEXT
        );
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS salon (
            id INTEGER PRIMARY KEY CHECK (id = 1),
            name TEXT,
            address TEXT,
            splitPercent REAL
        );
    `);
}

export function getProfile(): Profile | null {
    const row = db.getFirstSync<any>(`SELECT * FROM profile WHERE id = 1`);
    if (!row) return null;
    return {
        name: row.name,
        email: row.email,
        phone: row.phone,
        country: row.country,
        region: row.region,
        avatarUri: row.avatarUri,
    };
}

export function saveProfile(profile: Profile) {
  db.runSync(
    `INSERT INTO profile (id, name, email, phone, country, region, avatarUri)
     VALUES (1, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       name=excluded.name, email=excluded.email, phone=excluded.phone,
       country=excluded.country, region=excluded.region, avatarUri=excluded.avatarUri`,
    [profile.name, profile.email, profile.phone, profile.country, profile.region, profile.avatarUri]
  );
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

export function clearProfile() {
  db.execSync(`DELETE FROM profile;`);
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

export function getSalon(): Salon | null {
    const row = db.getFirstSync<any>(`SELECT * FROM salon WHERE id = 1`);
    if (!row) return null;
    return { name: row.name, address: row.address, splitPercent: row.splitPercent };
}

export function saveSalon(salon: Salon) {
    db.runSync(
        `INSERT INTO salon (id, name, address, splitPercent)
         VALUES (1, ?, ?, ?)
         ON CONFLICT(id) DO UPDATE SET
            name=excluded.name, address=excluded.address, splitPercent=excluded.splitPercent`,
        [salon.name, salon.address, salon.splitPercent]
    );
}