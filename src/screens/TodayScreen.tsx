import AmountCard from '../components/AmountCard';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import CurrencyInput from '../components/CurrencyInput';
import DateCard from '../components/DateCard';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import StatCard from '../components/StatCard';
import StatRow from '../components/StatRow';
import { styles } from '../styles/TodayScreen.styles';
import { useState, useCallback } from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useEntryStore } from '../store/useEntryStore';
import { useProfileStore } from '../store/useProfileStore';
import { getInitials } from '../utils/initials';

function formatDayLabel(dateStr: string) {
    const date = new Date(dateStr + 'T00:00:00');
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const monthDay = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
    return { weekday, monthDay };
}

export default function TodayScreen() {
    const { recentEntries, monthTotal, monthTips, saveEntry, refresh } = useEntryStore();
    const [money, setMoney] = useState('');
    const [tip, setTip] = useState('');
    const profile = useProfileStore((state) => state.profile);

    useFocusEffect(
        useCallback(() => {
            refresh();
        }, [])
    );

    const handleSave = () => {
        const moneyNum = parseFloat(money) || 0;
        const tipNum = parseFloat(tip) || 0;
        saveEntry(moneyNum, tipNum);
        setMoney('');
        setTip('');
    };

    const now = new Date();
    const monthLabel = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();

    return (
        <ScreenContainer>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.headerRow}>
                    <ScreenHeader label={monthLabel} title="Daily Entry" />
                    <Avatar initials={profile ? getInitials(profile.name) : ''} imageUri={profile?.avatarUri} />
                </View>

                <CurrencyInput label="TODAY'S MONEY" value={money} onChangeText={setMoney} />
                <CurrencyInput label="TODAY'S TIP" value={tip} onChangeText={setTip} />

                <Button label="Save Entry" onPress={handleSave} />

                <StatRow>
                    <StatCard label="THIS MONTH" value={`$${monthTotal.toFixed(2)}`} />
                    <StatCard label="TIPS" value={`$${monthTips.toFixed(2)}`} highlight />
                </StatRow>

                <View style={styles.activityHeader}>
                    <Text style={styles.activityTitle}>Recent Activity</Text>
                    <Text style={styles.activityCount}>{recentEntries.length} entries</Text>
                </View>

                {recentEntries.map((entry) => {
                    const { weekday, monthDay } = formatDayLabel(entry.date);
                    return (
                        <View key={entry.id} style={styles.entryRow}>
                            <DateCard weekday={weekday} monthDay={monthDay} />
                            <AmountCard money={entry.money} tip={entry.tip} />
                        </View>
                    );
                })}
            </ScrollView>
        </ScreenContainer>
    );
}
