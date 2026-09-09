import { useState } from 'react';
import { View, Text, Pressable, Switch, ScrollView, Alert, Share, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScreenContainer from '../../components/ScreenContainer';
import BackHeader from '../../components/BackHeader';
import SettingsSection from '../../components/SettingsSection';
import SettingsRow from '../../components/SettingsRow';
import SegmentedControl from '../../components/SegmentedControl';
import { getAllEntries } from '../../db/database';
import { styles } from '../../styles/AccountSettingsScreen.styles';
import { useSettingsStore } from '../../store/useSettingsStore';

export default function AccountSettingsScreen() {
    const [showTimePicker, setShowTimePicker] = useState(false);
    const { settings, updateSettings } = useSettingsStore();
    // convert stored "HH:MM" string to a Date object for the picker
    const [hours, minutes] = settings.reminderTime.split(':').map(Number);
    const reminderTimeDate = new Date(2000, 0, 1, hours, minutes);

    const timeLabel = reminderTimeDate.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit' 
    });

    const handleDailyReminderChange = (value: boolean) => {
        updateSettings({
            notifications: value,
            ...(!value && { emailNotif: false, phoneNotif: false }),
        });
    };

    const handleTimeChange = (event: any, selectedTime?: Date) => {
        if (Platform.OS === 'android') setShowTimePicker(false);
        if (selectedTime) {
            const hh = selectedTime.getHours().toString().padStart(2, '0');
            const mm = selectedTime.getMinutes().toString().padStart(2, '0');
            updateSettings({ reminderTime: `${hh}:${mm}` });
        }
    };

    const handleExport = async () => {
        const entries = getAllEntries();
        if (entries.length === 0) {
            Alert.alert('Nothing to export', 'You have no entries yet.');
            return;
        }
        const json = JSON.stringify(entries, null, 2);
        await Share.share({ message: json, title: 'Nail Pay Track export' });
    };

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <BackHeader title="Settings" />

                <SettingsSection label="NOTIFICATIONS">
                    <SettingsRow label="DAILY REMINDER">
                        <Switch value={settings.notifications} onValueChange={handleDailyReminderChange} trackColor={{ true: '#5a9c6f' }} />
                    </SettingsRow>

                    {settings.notifications && (
                        <>
                            <SettingsRow label="REMIND ME AT" divider>
                                {Platform.OS === 'ios' ? (
                                    <DateTimePicker value={reminderTimeDate} mode="time" display="compact" onValueChange={handleTimeChange} />
                                ) : (
                                    <>
                                        <Pressable style={styles.timeRow} onPress={() => setShowTimePicker(true)}>
                                            <Text style={styles.timeText}>{timeLabel}</Text>
                                            <Ionicons name="time-outline" size={20} color="#1a1a2e" />
                                        </Pressable>
                                        {showTimePicker && (
                                            <DateTimePicker value={reminderTimeDate} mode="time" display="default" onValueChange={handleTimeChange} />
                                        )}
                                    </>
                                )}
                            </SettingsRow>

                            <SettingsRow label="EMAIL NOTIFICATION" divider>
                                <Switch value={settings.emailNotif} onValueChange={(v) => updateSettings({ emailNotif: v })} disabled={!settings.notifications} trackColor={{ true: '#5a9c6f' }} />
                            </SettingsRow>

                            <SettingsRow label="PHONE NOTIFICATION">
                                <Switch value={settings.phoneNotif} onValueChange={(v) => updateSettings({ phoneNotif: v })} disabled={!settings.notifications} trackColor={{ true: '#5a9c6f' }} />
                            </SettingsRow>
                        </>
                    )}
                </SettingsSection>

                <SettingsSection label="APPEARANCE">
                    <SettingsRow label="THEME">
                        <SegmentedControl 
                            options={[
                                { label: 'Light', value: 'light' }, 
                                { label: 'Dark', value: 'dark' }
                            ]} 
                            selectedValue={settings.theme} 
                            onSelect={(v) => updateSettings({ theme: v as 'light' | 'dark' })} 
                        />
                    </SettingsRow>
                </SettingsSection>

                <SettingsSection label="DATA">
                    <Pressable onPress={handleExport}>
                        <SettingsRow label="EXPORT MY DATA">
                            <Ionicons name="share-outline" size={20} color="#5a9c6f" />
                        </SettingsRow>
                    </Pressable>
                </SettingsSection>
            </ScrollView>
        </ScreenContainer>
    );
}