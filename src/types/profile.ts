export type Country = 'US' | 'CA';

export interface Profile {
    name: string;
    email: string;
    phone: string;
    country: Country;
    region: string; // state or province code
    avatarUri: string | null;
}