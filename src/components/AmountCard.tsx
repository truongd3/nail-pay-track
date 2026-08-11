import { View, Text } from 'react-native';
import { styles } from '../styles/AmountCard.styles';

interface AmountCardProps {
  money: number;
  tip: number;
}

export default function AmountCard({ money, tip }: AmountCardProps) {
  return (
    <View style={styles.amounts}>
      <Text style={styles.money}>${money.toFixed(2)}</Text>
      <Text style={styles.tip}>+${tip.toFixed(2)} tip</Text>
    </View>
  );
}