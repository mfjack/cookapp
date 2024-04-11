import { Image, Pressable, PressableProps, Text } from 'react-native';
import { styles } from './styles';

interface IngredientProps {
	name: string;
	image: string;
	selected?: boolean;
}

const Ingredient = ({ image, name, selected = false, ...rest }: IngredientProps & PressableProps) => {
	return (
		<Pressable
			style={[styles.container, selected && styles.selected]}
			{...rest}
		>
			<Image
				style={styles.image}
				source={require('@/src/assets/banana.png')}
			/>
			<Text style={styles.text}>Banana</Text>
		</Pressable>
	);
};

export default Ingredient;
