import { useState, useCallback } from 'react';
import { View, FlatList, Alert, Pressable } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { HistoryStackParamList, RootStackParamList } from '../navigation/types';
import Avatar from '../components/Avatar';
import EmptyState from '../components/EmptyState';
import EntryRow from '../components/EntryRow';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { useEntryStore } from '../store/useEntryStore';
import { getAllEntries } from '../db/database';
import { Entry } from '../types/entry';
import { useProfileStore } from '../store/useProfileStore';
import { getInitials } from '../utils/initials';
import { styles } from '../styles/HistoryScreen.styles';

type HistoryNavProp = CompositeNavigationProp<
  NativeStackNavigationProp<HistoryStackParamList, 'HistoryList'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function HistoryScreen() {
    const navigation = useNavigation<HistoryNavProp>();
    const [entries, setEntries] = useState<Entry[]>([]);
    const removeEntry = useEntryStore((state) => state.removeEntry);
    const profile = useProfileStore((state) => state.profile);

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
                <Pressable onPress={() => navigation.navigate('AccountMenu')}>
                    <Avatar initials={profile ? getInitials(profile.name) : ''} imageUri={profile?.avatarUri} />
                </Pressable>
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
                ListEmptyComponent={
                    <EmptyState
                        icon="time-outline"
                        title="No entries yet"
                        subtitle="Log your first day on the Today tab"
                    />
                }
            />
        </ScreenContainer>
    );
}