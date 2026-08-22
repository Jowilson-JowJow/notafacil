export type Nota = {
    id: string;
    descricaoProduto: string;
    dataCompra: string;
    loja: string;
};

export type RootStackParamList = {
    Listagem : {novaNota?: Nota} | undefined;
    Cadastro : undefined;
};