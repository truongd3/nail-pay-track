import { useState, useCallback } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HistoryStackParamList } from '../navigation/HistoryStackNavigator';
import Avatar from '../components/Avatar';
import EntryRow from '../components/EntryRow';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { useEntryStore } from '../store/useEntryStore';
import { getAllEntries } from '../db/database';
import { Entry } from '../types/entry';
import { styles } from '../styles/HistoryScreen.styles';

type HistoryNavProp = NativeStackNavigationProp<HistoryStackParamList, 'HistoryList'>;

export default function HistoryScreen() {
    const navigation = useNavigation<HistoryNavProp>();
    const [entries, setEntries] = useState<Entry[]>([]);
    const removeEntry = useEntryStore((state) => state.removeEntry);

    const loadEntries = () => {
        setEntries(getAllEntries());
    };

    useFocusEffect(
        useCallback(() => {
            loadEntries();
        }, [])
    );

    const handleDelete = (id: number) => {
        Alert.alert('Delete entry?', 'This cannot be undone.', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    removeEntry(id);
                    loadEntries();
                },
            },
        ]);
    };

    const now = new Date();
    const monthLabel = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();

    return (
        <ScreenContainer>
            <View style={styles.headerRow}>
                <ScreenHeader label={monthLabel} title="History" />
                <Avatar initials="YN" />
            </View>

            <ScreenHeader label="ALL TIME" title="History" />

            <FlatList
                data={entries}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <EntryRow entry={item} onDelete={handleDelete} onPress={(entry) => navigation.navigate('EditEntry', { entry })}/>
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </ScreenContainer>
    );
}