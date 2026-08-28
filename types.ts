export type Nota = {
    id: number;
    descricaoProduto: string;
    dataCompra?: string;
    tempoGarantia: number;
    loja: string;
    assistenciaTecnica: string;
};

export type NotaFormulario = Omit<Nota, 'id'>;
  