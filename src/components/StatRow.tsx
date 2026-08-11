import { View } from 'react-native';
import { styles } from '../styles/StatRow.styles';

interface StatRowProps {
  children: React.ReactNode;
}

export default function StatRow({ children }: StatRowProps) {
  return <View style={styles.statsRow}>{children}</View>;
}