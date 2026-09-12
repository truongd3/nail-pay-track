import { View } from 'react-native';
import { createStyles } from '../styles/StatRow.styles';
import { useTheme } from '../theme/ThemeContext';

interface StatRowProps {
  children: React.ReactNode;
}

export default function StatRow({ children }: StatRowProps) {
  const colors = useTheme();
  const styles = createStyles(colors);
  return <View style={styles.statsRow}>{children}</View>;
}