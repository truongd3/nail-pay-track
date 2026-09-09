export interface Settings {
    notifications: boolean;
    emailNotif: boolean;
    phoneNotif: boolean;
    reminderTime: string; // stored as "HH:MM" 24-hour format
    theme: 'light' | 'dark';
}