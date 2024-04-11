import { fonts } from './../../theme/fonts';
import { StyleSheet } from 'react-native';
import { theme } from '@/src/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},

	title: {
		fontSize: theme.fonts.size.heading.xl,
		lineHeight: 40,
		marginTop: 42,
		fontFamily: theme.fonts.family.bold,
	},

	subtitle: {
		fontSize: theme.fonts.size.body.md,
	},
});
