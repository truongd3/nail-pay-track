import { View, Text } from 'react-native';
import { createStyles } from '../styles/StatCard.styles';
import { useTheme } from '../theme/ThemeContext';

interface StatCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

export default function StatCard({ label, value, highlight }: StatCardProps) {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, highlight && styles.highlightValue]}>
        {value}
      </Text>
    </View>
  );
}