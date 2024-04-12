import { Text, View } from 'react-native';
import Animated, { SlideInDown, BounceOutDown } from 'react-native-reanimated';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/src/theme';

interface SelectedProps {
	quantity: number;
	onClear: () => void;
	onSearch: () => void;
}

const Selected = ({ quantity, onClear, onSearch }: SelectedProps) => {
	return (
		<Animated.View
			style={styles.container}
			entering={SlideInDown.duration(500)}
			exiting={BounceOutDown}
		>
			<View style={styles.header}>
				<Text style={styles.label}>{quantity} Ingredientes selecionados</Text>
				<MaterialIcons
					name='close'
					size={24}
					onPress={onClear}
					color={theme.colors.gray_400}
				/>
			</View>
		</Animated.View>
	);
};

export default Selected;
