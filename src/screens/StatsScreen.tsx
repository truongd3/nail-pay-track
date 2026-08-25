import { useState, useCallback } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Avatar from '../components/Avatar';
import EmptyState from '../components/EmptyState';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import StatCard from '../components/StatCard';
import StatRow from '../components/StatRow';
import StatsTableHeader from '../components/StatsTableHeader';
import StatsTableRow from '../components/StatsTableRow';
import { getMonthlyStats, getEntriesForMonth, MonthlyStat } from '../db/database';
import { useProfileStore } from '../store/useProfileStore';
import { useSalonStore } from '../store/useSalonStore';
import { getInitials } from '../utils/initials';
import { reconcileTips } from '../utils/tipReconciliation';
import { calculateWageExcludingTip } from '../utils/wage';
import { styles } from '../styles/StatsScreen.styles';

function formatMonthLabel(monthKey: string) {
    const [year, month] = monthKey.split('-');
    const date = new Date(Number(year), Number(month) - 1, 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function StatsScreen() {
    const [monthlyStats, setMonthlyStats] = useState<MonthlyStat[]>([]);
    const profile = useProfileStore((state) => state.profile);
    const splitPercent = useSalonStore((state) => state.salon?.splitPercent ?? 100);
    const navigation = useNavigation<any>();

    const loadStats = () => {
        setMonthlyStats(getMonthlyStats());
    };

    useFocusEffect(
        useCallback(() => {
            loadStats();
        }, [])
    );

    const totalWage = monthlyStats.reduce((sum, m) => sum + calculateWageExcludingTip(m.totalMoney, splitPercent), 0);
    const totalTips = monthlyStats.reduce((sum, m) => sum + m.totalTip, 0);

    const now = new Date();
    const monthLabel = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();

    return (
        <ScreenContainer>
            <View style={styles.headerRow}>
                <ScreenHeader label={monthLabel} title="Stats" />
                <Pressable onPress={() => navigation.navigate('AccountMenu')}>
                    <Avatar initials={profile ? getInitials(profile.name) : ''} imageUri={profile?.avatarUri} />
                </Pressable>
            </View>

            <ScreenHeader label="OVERVIEW" title="Overall Stats" />

            <StatRow>
                <StatCard label="TOTAL WAGE" value={`$${totalWage.toFixed(2)}`} />
                <StatCard label="TOTAL TIPS" value={`$${totalTips.toFixed(2)}`} highlight />
            </StatRow>

            <Text style={styles.sectionTitle}>Tip Breakdown</Text>

            {monthlyStats.length > 0 && <StatsTableHeader />}

            <FlatList
                data={monthlyStats}
                keyExtractor={(item) => item.month}
                renderItem={({ item }) => {
                    const monthEntries = getEntriesForMonth(item.month);
                    const { received, unpaid } = reconcileTips(monthEntries);
                    return (
                        <StatsTableRow
                            monthLabel={formatMonthLabel(item.month)}
                            tip={item.totalTip} received={received} unpaid={unpaid}
                        />
                    );
                }}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <EmptyState
                        icon="stats-chart-outline"
                        title="No stats yet"
                        subtitle="Once you log a few days, your monthly tip breakdown will show up here"
                    />
                }
            />
        </ScreenContainer>
    );
}