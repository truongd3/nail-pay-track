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

export default function AccountSettingsScreen() {
    const [notifications, setNotifications] = useState(false);
    const [reminderTime, setReminderTime] = useState(new Date(2000, 0, 1, 22, 0)); // 10:00 PM default
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [theme, setTheme] = useState('light');

    const timeLabel = reminderTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    });

    const handleTimeChange = (event: any, selectedTime?: Date) => {
        setShowTimePicker(Platform.OS === 'ios');
        if (selectedTime) setReminderTime(selectedTime);
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
                        <Switch
                            value={notifications} onValueChange={setNotifications}
                            trackColor={{ true: '#5a9c6f' }}
                        />
                    </SettingsRow>

                    {notifications && (
                        <SettingsRow label="REMIND ME AT" divider>
                            <Pressable style={styles.timeRow} onPress={() => setShowTimePicker(true)}>
                                <Text style={styles.timeText}>{timeLabel}</Text>
                                <Ionicons name="time-outline" size={20} color="#1a1a2e" />
                            </Pressable>
                        </SettingsRow>
                    )}
                </SettingsSection>

                {showTimePicker && (
                    <DateTimePicker
                        value={reminderTime}
                        mode="time"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onValueChange={handleTimeChange}
                    />
                )}

                <SettingsSection label="APPEARANCE">
                    <SettingsRow label="THEME">
                        <SegmentedControl
                            options={[
                                { label: 'Light', value: 'light' },
                                { label: 'Dark', value: 'dark' },
                            ]}
                            selectedValue={theme} onSelect={setTheme}
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