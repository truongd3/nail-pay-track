import { Entry } from '../types/entry';

export type RootStackParamList = {
    MainTabs: undefined;
    AccountMenu: undefined;
    MyProfile: undefined;
    MySalon: undefined;
    AccountSettings: undefined;
    HelpFAQ: undefined;
    PrivacyTerms: undefined;
};

export type HistoryStackParamList = {
    HistoryList: undefined;
    EditEntry: { entry: Entry };
    AddPastEntry: undefined;
};