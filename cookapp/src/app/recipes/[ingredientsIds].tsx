import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/src/theme';
import { router, useLocalSearchParams } from 'expo-router';
import { Recipe } from '@/src/_components/recipe/recipe';
import { useEffect, useState } from 'react';
import { services } from '@/src/services';
import { Ingredients } from '@/src/_components/ingredients/ingredients';

const Recipes = () => {
	const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
	const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

	const params = useLocalSearchParams<{ ingredientsIds: string }>();

	const ingredientsIds = params.ingredientsIds.split(',');

	useEffect(() => {
		services.ingredients.findByIds(ingredientsIds).then(setIngredients);
	}, []);

	useEffect(() => {
		services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes);
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<MaterialIcons
					name='arrow-back-ios'
					size={20}
					color={theme.colors.gray_400}
					onPress={() => router.back()}
				/>

				<Text style={styles.title}>Ingredientes</Text>
			</View>

			<Ingredients ingredients={ingredients} />

			<FlatList
				data={recipes}
				keyExtractor={item => item.id}
				renderItem={item => (
					<Recipe
						recipe={item.item}
						onPress={() => router.navigate('/recipe/' + item.item.id)}
					/>
				)}
				contentContainerStyle={styles.recipesContent}
				showsHorizontalScrollIndicator={false}
				columnWrapperStyle={{ gap: 16 }}
				numColumns={2}
			/>
		</View>
	);
};

export default Recipes;
