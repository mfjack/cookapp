import { Alert, ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import Ingredient from '@/src/_components/ingredient';
import { useState } from 'react';
import Selected from '@/src/_components/selected';

export default function Index() {
	const [selected, setSelected] = useState<string[]>([]);

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
				{Array.from({ length: 100 }).map((item, index) => (
					<Ingredient
						key={index}
						name='Tomate'
						image=''
						selected={selected.includes(String(index))}
						onPress={() => handleToggleSelected(String(index))}
					/>
				))}
			</ScrollView>

			{selected.length > 0 && (
				<Selected
					quantity={selected.length}
					onClear={handleClearSelected}
					onSearch={() => {}}
				/>
			)}
		</View>
	);
}
