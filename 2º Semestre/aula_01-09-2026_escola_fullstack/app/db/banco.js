
import Database from "better-sqlite3";

// ============================================
// CONEXÃO COM O BANCO DE DADOS
// ============================================

const db = new Database("./app/db/escola.db");

// Ativar as chaves estrangeiras
db.pragma("foreign_keys = ON");


// ============================================
// CRIAÇÃO DAS TABELAS
// ============================================

db.exec(`

    -- TABELA DE ALUNOS

    CREATE TABLE IF NOT EXISTS alunos (
        id_aluno INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        idade INTEGER NOT NULL,
        serie TEXT NOT NULL,
        ra TEXT NOT NULL UNIQUE
    );


    -- TABELA DE NOTAS

    CREATE TABLE IF NOT EXISTS notas (
        id_notas INTEGER PRIMARY KEY AUTOINCREMENT,
        aluno_id INTEGER NOT NULL,
        t1 REAL NOT NULL,
        t2 REAL NOT NULL,
        n1 REAL NOT NULL,
        n2 REAL NOT NULL,
        n3 REAL NOT NULL,

        FOREIGN KEY (aluno_id)
        REFERENCES alunos(id_aluno)
        ON DELETE CASCADE
    );


    -- TABELA DE USUÁRIOS

    CREATE TABLE IF NOT EXISTS usuario (
        id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        login TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
    );


    -- TABELA DE SESSÕES

    CREATE TABLE IF NOT EXISTS sessoes (
        token TEXT PRIMARY KEY,
        id_usuario INTEGER NOT NULL,
        expira_em INTEGER NOT NULL,

        FOREIGN KEY (id_usuario)
        REFERENCES usuario(id_usuario)
        ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_sessoes_expira_em
    ON sessoes(expira_em);


    -- ========================================
    -- TABELA DE DISCIPLINAS
    -- ========================================

    CREATE TABLE IF NOT EXISTS disciplinas (
        id_disciplina INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE,
        pontuacao_minima REAL NOT NULL
            CHECK (pontuacao_minima >= 0
                AND pontuacao_minima <= 100)
    );


    -- ========================================
    -- TABELA DE PROFESSORES
    -- ========================================

    CREATE TABLE IF NOT EXISTS professores (
        id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        nif TEXT NOT NULL UNIQUE,
        dias_aula TEXT NOT NULL,
        disciplina_id INTEGER NOT NULL,
        total_aulas_semana INTEGER NOT NULL
            CHECK (total_aulas_semana > 0),

        FOREIGN KEY (disciplina_id)
        REFERENCES disciplinas(id_disciplina)
        ON DELETE RESTRICT
    );


    -- ÍNDICE PARA CONSULTAR PROFESSORES
    -- POR DISCIPLINA

    CREATE INDEX IF NOT EXISTS idx_professores_disciplina
    ON professores(disciplina_id);

`);

console.log("Banco de dados inicializado com sucesso!");

export default db;
