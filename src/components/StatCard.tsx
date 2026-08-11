import { View, Text } from 'react-native';
import { styles } from '../styles/StatCard.styles';

interface StatCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

export default function StatCard({ label, value, highlight }: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, highlight && styles.highlightValue]}>
        {value}
      </Text>
    </View>
  );
}