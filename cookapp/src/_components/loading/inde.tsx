import { theme } from '@/src/theme';
import { ActivityIndicator } from 'react-native';
import { styles } from './styles';

export function Loading() {
	return (
		<ActivityIndicator
			style={styles.container}
			color={theme.colors.green_600}
		/>
	);
}
