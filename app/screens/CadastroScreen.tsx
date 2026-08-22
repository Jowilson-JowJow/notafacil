import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import type { RootStackParamList } from '../types';

const notasIniciais = [
    {id: '1', descricaoProduto: 'TV 50 Polegadas', loja: 'Eletro Sul'},
    {id: '2', descricaoProduto: 'Bicicleta', loja: 'Casas Bahia'},
    {id: '3', descricaoProduto: 'Mesa', loja: 'Magazine'} 
]

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

export default function CadastroScreen ({ navigation}: Props) {
   
    return (
        <View>
            <Text>Em construção</Text>
        </View>
    );    
}