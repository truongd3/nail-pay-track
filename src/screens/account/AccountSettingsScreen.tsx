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
import { createStyles } from '../../styles/AccountSettingsScreen.styles';
import { useTheme } from '../../theme/ThemeContext';
import { useSettingsStore } from '../../store/useSettingsStore';
import { requestNotificationPermission, scheduleDailyReminder, cancelDailyReminder } from '../../utils/notifications';

export default function AccountSettingsScreen() {
    const colors = useTheme();
    const styles = createStyles(colors);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const { settings, updateSettings } = useSettingsStore();
    // convert stored "HH:MM" string to a Date object for the picker
    const [hours, minutes] = settings.reminderTime.split(':').map(Number);
    const reminderTimeDate = new Date(2000, 0, 1, hours, minutes);

    const timeLabel = reminderTimeDate.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit' 
    });

    const handleDailyReminderChange = async (value: boolean) => {
        if (!value) { // turning off the master toggle disables everything under it
            await cancelDailyReminder();
            updateSettings({ notifications: false, phoneNotif: false, emailNotif: false });
        } else {
            updateSettings({ notifications: true });
            // Note: turning on "Daily Reminder" alone does NOT schedule anything — the user still needs to enable "Phone Notification" specifically
        }
    };

    const handlePhoneNotifChange = async (value: boolean) => {
        if (value) {
            const granted = await requestNotificationPermission();
            if (!granted) {
                Alert.alert(
                    "Permission needed",
                    "Please enable notifications for this app in your phone settings."
                );
            return;
            }
            const [hours, minutes] = settings.reminderTime.split(':').map(Number);
            await scheduleDailyReminder(hours, minutes);
            updateSettings({ phoneNotif: true });
        } else {
            await cancelDailyReminder();
            updateSettings({ phoneNotif: false });
        }
    };

    const handleTimeChange = async (event: any, selectedTime?: Date) => {
        if (Platform.OS === 'android') setShowTimePicker(false);
        if (selectedTime) {
            const hh = selectedTime.getHours().toString().padStart(2, '0');
            const mm = selectedTime.getMinutes().toString().padStart(2, '0');
            updateSettings({ reminderTime: `${hh}:${mm}` });

            if (settings.phoneNotif) await scheduleDailyReminder(selectedTime.getHours(), selectedTime.getMinutes());
        }
    };

    const handleExport = async () => {
        const entries = getAllEntries();
        if (entries.length === 0) {
            Alert.alert("Nothing to export", "You have no entries yet.");
            return;
        }
        const json = JSON.stringify(entries, null, 2);
        await Share.share({ message: json, title: "Nail Pay Track export" });
    };

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <BackHeader title="Settings" />

                <SettingsSection label="NOTIFICATIONS">
                    <SettingsRow label="DAILY REMINDER">
                        <Switch value={settings.notifications} onValueChange={handleDailyReminderChange} trackColor={{ true: colors.accent }} />
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
                                            <Ionicons name="time-outline" size={20} color={colors.textPrimary} />
                                        </Pressable>
                                        {showTimePicker && (
                                            <DateTimePicker value={reminderTimeDate} mode="time" display="default" onValueChange={handleTimeChange} />
                                        )}
                                    </>
                                )}
                            </SettingsRow>

                            <SettingsRow label="PHONE NOTIFICATION" divider>
                                <Switch value={settings.phoneNotif} onValueChange={handlePhoneNotifChange} disabled={!settings.notifications} trackColor={{ true: colors.accent }} />
                            </SettingsRow>

                            <SettingsRow label="EMAIL NOTIFICATION">
                                <Switch
                                    value={false}
                                    onValueChange={() => Alert.alert("Coming soon", "Email reminders aren't available yet. For now, please use phone notifications instead.")}
                                    trackColor={{ true: colors.accent }}
                                />
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
                            <Ionicons name="share-outline" size={20} color={colors.accent} />
                        </SettingsRow>
                    </Pressable>
                </SettingsSection>
            </ScrollView>
        </ScreenContainer>
    );
}