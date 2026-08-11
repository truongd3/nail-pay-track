import { View, Text } from 'react-native';
import { styles } from '../styles/DateCard.styles';

interface DateCardProps {
  weekday: string;
  monthDay: string;
}

export default function DateCard({ weekday, monthDay }: DateCardProps) {
  return (
    <View>
      <Text style={styles.weekday}>{weekday}</Text>
      <Text style={styles.date}>{monthDay}</Text>
    </View>
  );
}