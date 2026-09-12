import { View, Text } from 'react-native';
import { createStyles } from '../styles/DateCard.styles';
import { useTheme } from '../theme/ThemeContext';

interface DateCardProps {
  weekday: string;
  monthDay: string;
}

export default function DateCard({ weekday, monthDay }: DateCardProps) {
  const colors = useTheme();
  const styles = createStyles(colors);

  return (
    <View>
      <Text style={styles.weekday}>{weekday}</Text>
      <Text style={styles.date}>{monthDay}</Text>
    </View>
  );
}