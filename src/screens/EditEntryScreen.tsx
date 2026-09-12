import { useState } from 'react';
import { View, Text, Pressable, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { HistoryStackParamList } from '../navigation/types';
import Button from '../components/Button';
import CurrencyInput from '../components/CurrencyInput';
import ScreenContainer from '../components/ScreenContainer';
import { useEntryStore } from '../store/useEntryStore';
import { createStyles } from '../styles/EditEntryScreen.styles';
import { useTheme } from '../theme/ThemeContext';

type EditEntryNavProp = NativeStackNavigationProp<HistoryStackParamList, 'EditEntry'>;
type EditEntryRouteProp = RouteProp<HistoryStackParamList, 'EditEntry'>;

function formatDateHeader(dateStr: string) {
    const date = new Date(dateStr + 'T00:00:00');
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
    const monthDay = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
    return { weekday, monthDay };
}

export default function EditEntryScreen() {
    const colors = useTheme();
    const styles = createStyles(colors);
    const navigation = useNavigation<EditEntryNavProp>();
    const route = useRoute<EditEntryRouteProp>();
    const { entry } = route.params;

    const editEntry = useEntryStore((state) => state.editEntry);
    const removeEntry = useEntryStore((state) => state.removeEntry);

    const [money, setMoney] = useState(entry.money.toString());
    const [tip, setTip] = useState(entry.tip.toString());

    const moneyNum = parseFloat(money) || 0;
    const tipNum = parseFloat(tip) || 0;
    const totalWage = moneyNum + tipNum;

    const hasChanges = moneyNum !== entry.money || tipNum !== entry.tip;
    const { weekday, monthDay } = formatDateHeader(entry.date);

    const handleSave = () => {
        editEntry(entry.id, moneyNum, tipNum);
        navigation.goBack();
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    const handleDelete = () => {
        Alert.alert('Delete entry?', 'This cannot be undone.', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    removeEntry(entry.id);
                    navigation.goBack();
                },
            },
        ]);
    };

    return (
        <ScreenContainer>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.headerRow}>
                    <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
                        <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
                    </Pressable>
                    <View style={styles.dateBlock}>
                        <Text style={styles.weekday}>{weekday}</Text>
                        <Text style={styles.monthDay}>{monthDay}</Text>
                    </View>
                </View>

                <CurrencyInput label="MONEY" value={money} onChangeText={setMoney} />
                <CurrencyInput label="TIP" value={tip} onChangeText={setTip} />

                <View style={styles.wageCard}>
                    <Text style={styles.wageLabel}>TOTAL WAGE</Text>
                    <Text style={styles.wageValue}>${totalWage.toFixed(2)}</Text>
                </View>

                <Button label="Save Changes" onPress={handleSave} disabled={!hasChanges} />
                <Button label="Cancel" onPress={handleCancel} variant="secondary" />

                <Pressable style={styles.deleteLink} onPress={handleDelete}>
                    <Ionicons name="trash-outline" size={16} color={colors.textSecondary} />
                    <Text style={styles.deleteLinkText}>Delete Entry</Text>
                </Pressable>
            </ScrollView>
        </ScreenContainer>
    );
}