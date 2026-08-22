import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState, } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { RootStackParamList } from '../types';

const notasIniciais = [
    {id: '1', descricaoProduto: 'TV 50 Polegadas', loja: 'Eletro Sul'},
    {id: '2', descricaoProduto: 'Bicicleta', loja: 'Casas Bahia'},
    {id: '3', descricaoProduto: 'Mesa', loja: 'Magazine'} 
]

type Props = NativeStackScreenProps<RootStackParamList, 'Listagem'>;

export default function ListagemScreen ({ navigation, route}: Props) {
    const [notas, setNotas ] = useState(notasIniciais)

    useEffect( () => {
        if (route.params?.novaNota){
            setNotas((atual) => [...atual, route.params!.novaNota!]);
        }
    }, [route.params?.novaNota]);

    return (
        <View style={styles.container}>

            <View style = {styles.header}>
                <Text style = {styles.headerTitle}>NotaFácil</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style = {styles.addButton}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data = {notas}
                keyExtractor={(item) => item.id}
                contentContainerStyle = {{padding: 12}}
                renderItem={({item}) => (
                    <View style= {styles.card}>
                        <Text style={styles.cardTitle}>{item.descricaoProduto}</Text>
                        <Text style={styles.cardSubTitle}>{item.loja}</Text>
                    </View>
                )}
            />
        </View>
    );    
}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#0E1B33' 
    }, 
    header: { 
        backgroundColor: '#D85A30', 
        padding: 16, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
    }, 
    headerTitle: { 
        color: '#FAECE7', 
        fontSize: 20, 
        fontWeight: 'bold' 
    }, 
    addButton: { 
        color: '#FAECE7', 
        fontSize: 26, 
        fontWeight: 'bold' 
    }, 
    card: { 
        backgroundColor: '#16264A', 
        borderRadius: 10, 
        padding: 14, 
        marginBottom: 10, 
        borderWidth: 1, 
        borderColor: '#223564', 
    }, 
    cardTitle: { 
        color: '#F0F2FA', 
        fontSize: 15, 
        fontWeight: 'bold' 
    }, 
    cardSubTitle: { 
        color: '#98A4C8', 
        fontSize: 13, 
        marginTop: 2 
    }, 
});