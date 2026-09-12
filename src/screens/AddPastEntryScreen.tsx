import { useState } from 'react';
import { View, Text, Pressable, Alert, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import KeyboardFormScreen from '../components/KeyboardFormScreen';
import BackHeader from '../components/BackHeader';
import CurrencyInput from '../components/CurrencyInput';
import Button from '../components/Button';
import { useEntryStore } from '../store/useEntryStore';
import { getEntryByDate } from '../db/database';
import { toLocalDateString } from '../utils/date';
import { createStyles } from '../styles/AddPastEntryScreen.styles';
import { useTheme } from '../theme/ThemeContext';

export default function AddPastEntryScreen() {
    const colors = useTheme();
    const styles = createStyles(colors);
    const navigation = useNavigation<any>();
    const addEntryForDate = useEntryStore((state) => state.addEntryForDate);

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [money, setMoney] = useState('');
    const [tip, setTip] = useState('');

    const dateString = toLocalDateString(date);
    const displayDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowPicker(Platform.OS === 'ios'); // iOS keeps picker open until dismissed
        if (selectedDate) setDate(selectedDate);
    };

    const handleSave = () => {
        const moneyNum = parseFloat(money) || 0;
        const tipNum = parseFloat(tip) || 0;

        if (moneyNum === 0 && tipNum === 0) {
            Alert.alert('Nothing to save', 'Enter a money or tip amount first.');
            return;
        }

        const existing = getEntryByDate(dateString);
        if (existing) {
            Alert.alert(
                "Entry already exists",
                `You already logged ${displayDate}. Go to History and tap that entry to edit it instead.`
            );
            return;
        }

        addEntryForDate(dateString, moneyNum, tipNum);
        navigation.goBack();
    };

    return (
        <KeyboardFormScreen contentContainerStyle={styles.content}>
            <BackHeader title="Add Past Entry" />

            <Pressable style={styles.dateSelector} onPress={() => setShowPicker(true)}>
                <Text style={styles.dateLabel}>DATE</Text>
                <View style={styles.dateValueRow}>
                    <Text style={styles.dateValue}>{displayDate}</Text>
                    <Ionicons name="calendar-outline" size={20} color={colors.textSecondary} />
                </View>
            </Pressable>

            {showPicker && (
                <DateTimePicker
                    value={date} mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    maximumDate={new Date()} onValueChange={handleDateChange}
                />
            )}

            {Platform.OS === 'ios' && showPicker && (
                <Button label="Done" onPress={() => setShowPicker(false)} variant="secondary" />
            )}

            <CurrencyInput label="MONEY" value={money} onChangeText={setMoney} />
            <CurrencyInput label="TIP" value={tip} onChangeText={setTip} />

            <Button label="Save Entry" onPress={handleSave} />
        </KeyboardFormScreen>
    );
}