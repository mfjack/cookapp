import { ScrollView } from 'react-native';
import Ingredient from '../ingredient';
import { styles } from './styles';
import { services } from '@/services';

interface IngredientsProps {
	name: string;
	image: string;
}

const Ingredients = ({ Ingredients }: { Ingredients: IngredientsProps[] }) => {
	return (
		<ScrollView
			horizontal
			style={styles.container}
			contentContainerStyle={styles.ingredientsContent}
			showsHorizontalScrollIndicator={false}
		>
			{Ingredients.map(ingredient => (
				<Ingredient
					key={ingredient.name}
					name={ingredient.name}
					image={`${services.storage.imagePath}/${ingredient.image}`}
				/>
			))}
		</ScrollView>
	);
};

export default Ingredients;
