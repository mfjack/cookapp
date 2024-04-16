import { theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
      flex: 1,
      padding: 12,
	},

	header: {
		// paddingHorizontal: 22,
		// paddingTop: 32,
		marginBottom: 12,
	},

	title: {
		fontSize: theme.fonts.size.heading.md,
		fontFamily: theme.fonts.family.bold,
		marginTop: 12,
	},
});
