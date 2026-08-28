import * as SQLite from  'expo-sqlite';
import type {Nota, NotaFormulario} from '@types';

const db = SQLite.openDatabaseSync('notafacil.db');

export function initDatabase(){
    db.execSync('CREATE TABLE IF NOT EXISTS notas(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        descricaoProduto TEXT NOT null,
        dataCompra TEXT,
        tempoGarantia INTEGER,
        loja TEXT,
        assistenciaTecnica TEXT        
        ');
    );    
}

export function inserir(nota: NotaFormulario){
    db.runSync(
        'INSERT INTO notas (descricaoProduto, dataCompra, tempoGarantia, loja, assistenciaTecnica VALUES (?,?, ?, ?, ?);',
        [nota.descricaoProduto, nota.dataCompra, nota.tempoGarantia, nota.loja, nota.assistenciaTecnica]
    );
}

