import { View, Text } from 'react-native';
import { createStyles } from '../styles/AmountCard.styles';
import { useTheme } from '../theme/ThemeContext';

interface AmountCardProps {
  money: number;
  tip: number;
}

export default function AmountCard({ money, tip }: AmountCardProps) {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.amounts}>
      <Text style={styles.money}>${money.toFixed(2)}</Text>
      <Text style={styles.tip}>+${tip.toFixed(2)} tip</Text>
    </View>
  );
}