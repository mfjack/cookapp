import { Ingredient } from '@/src/_components/ingredient/ingredient';
import { Selected } from '@/src/_components/selected/selected';
import { services } from '@/src/services';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export default function Index() {
	const [selected, setSelected] = useState<string[]>([]);
	const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

	const handleToggleSelected = (value: string) => {
		if (selected.includes(value)) {
			setSelected(selected.filter(item => item !== value));
		} else {
			setSelected([...selected, value]);
		}
	};

	const handleClearSelected = () => {
		Alert.alert('Limpar', 'Deseja limpar os itens selecionados?', [
			{
				text: 'Não',
				style: 'cancel',
			},
			{
				text: 'Sim',
				onPress: () => setSelected([]),
			},
		]);
	};

	const handleSearch = () => router.navigate('/recipes/' + selected);

	useEffect(() => {
		services.ingredients.findAll().then(setIngredients);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Escolha {'\n'}
				<Text style={styles.subtitle}>os produtos</Text>
			</Text>

			<Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

			<ScrollView
				contentContainerStyle={styles.ingredients}
				showsVerticalScrollIndicator={false}
			>
				{ingredients.map(item => (
					<Ingredient
						key={item.id}
						name={item.name}
						image={`${services.storage.imagePath}/${item.image}`}
						selected={selected.includes(item.id)}
						onPress={() => handleToggleSelected(item.id)}
					/>
				))}
			</ScrollView>

			{selected.length > 0 && (
				<Selected
					quantity={selected.length}
					onClear={handleClearSelected}
					onSearch={handleSearch}
				/>
			)}
		</View>
	);
}
