import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
	title: string;
}

const Button = ({ title, ...rest }: ButtonProps & TouchableOpacity) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={[styles.button]}
			{...rest}
		>
			<Text style={[styles.text]}>{title}</Text>
		</TouchableOpacity>
	);
};
export default Button;
