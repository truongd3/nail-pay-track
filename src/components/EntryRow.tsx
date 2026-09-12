import { View, Pressable } from 'react-native';
import AmountCard from './AmountCard';
import DateBadge from './DateBadge';
import DateCard from './DateCard';
import DeleteButton from './DeleteButton';
import { createStyles } from '../styles/EntryRow.styles';
import { useTheme } from '../theme/ThemeContext';
import { Entry } from '../types/entry';

interface EntryRowProps {
    entry: Entry;
    onDelete?: (id: number) => void;
    onPress?: (entry: Entry) => void;
}

function formatDayLabel(dateStr: string) {
    const date = new Date(dateStr + 'T00:00:00');
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const dayAbbrev = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const dayNumber = date.getDate().toString();
    const monthDay = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
    return { weekday, dayAbbrev, dayNumber, monthDay };
}

export default function EntryRow({ entry, onDelete, onPress }: EntryRowProps) {
    const colors = useTheme();
    const styles = createStyles(colors);
    const { weekday, dayAbbrev, dayNumber, monthDay } = formatDayLabel(entry.date);

    return (
        <Pressable
            style={styles.row}
            onPress={() => onPress?.(entry)}
            disabled={!onPress}
        >
            <DateBadge dayAbbrev={dayAbbrev} dayNumber={dayNumber} />
            <View style={styles.middle}>
                <DateCard weekday={weekday} monthDay={monthDay} />
            </View>
            <AmountCard money={entry.money} tip={entry.tip} />
            {onDelete && <DeleteButton onPress={() => onDelete(entry.id)} />}
        </Pressable>
    );
}