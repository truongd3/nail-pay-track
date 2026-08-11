import { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Avatar from '../components/Avatar';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import StatCard from '../components/StatCard';
import StatRow from '../components/StatRow';
import StatsTableHeader from '../components/StatsTableHeader';
import StatsTableRow from '../components/StatsTableRow';
import { getMonthlyStats, MonthlyStat } from '../db/database';
import { styles } from '../styles/StatsScreen.styles';

function formatMonthLabel(monthKey: string) {
    const [year, month] = monthKey.split('-');
    const date = new Date(Number(year), Number(month) - 1, 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function StatsScreen() {
    const [monthlyStats, setMonthlyStats] = useState<MonthlyStat[]>([]);

    const loadStats = () => {
        setMonthlyStats(getMonthlyStats());
    };

    useFocusEffect(
        useCallback(() => {
            loadStats();
        }, [])
    );

    const totalWage = monthlyStats.reduce(
        (sum, m) => sum + m.totalMoney + m.totalTip,0
    );
    const totalTips = monthlyStats.reduce((sum, m) => sum + m.totalTip, 0);

    const now = new Date();
    const monthLabel = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();

    return (
        <ScreenContainer>
            <View style={styles.headerRow}>
                <ScreenHeader label={monthLabel} title="Stats" />
                <Avatar initials="YN" />
            </View>

            <ScreenHeader label="OVERVIEW" title="Monthly Stats" />

            <StatRow>
                <StatCard label="TOTAL WAGE" value={`$${totalWage.toFixed(2)}`} />
                <StatCard label="TOTAL TIPS" value={`$${totalTips.toFixed(2)}`} highlight />
            </StatRow>

            <Text style={styles.sectionTitle}>Tip Breakdown</Text>

            <StatsTableHeader />

            <FlatList
                data={monthlyStats}
                keyExtractor={(item) => item.month}
                renderItem={({ item }) => (
                    <StatsTableRow
                        monthLabel={formatMonthLabel(item.month)}
                        tip={item.totalTip}
                        received={0}
                        unpaid={0}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </ScreenContainer>
    );
}