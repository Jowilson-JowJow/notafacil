import { useEffect, useState, } from "react";

const notasIniciais = [
    {id: '1', descricaoProduto: 'TV 50 Polegadas', loja: 'Eletro Sul'},
    {id: '2', descricaoProduto: 'Bicicleta', loja: 'Casas Bahia'},
    {id: '3', descricaoProduto: 'Mesa', loja: 'Magazine'} 
]

export default function ListagemScreen ({ navigation, route}) {
    const [notas, setNotas ] = useState(notasIniciais)

    useEffect( () => {
        if (route.params?.novaNota){
            setNotas((atual) => [...atual, route.params.novaNota]);
        }
    }, [route.params?.novaNota]);

    return {

        
    }

}