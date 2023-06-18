class Escola {
    public readonly nome: string;
    private readonly alunos: Aluno[];

    constructor(nome: string) {
        this.nome = nome;
        this.alunos = [];
    }

    public adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }
}

class Aluno {
    constructor(public readonly nome: string) {}
}

const escola = new Escola("nova Escola");
const aluno1 = new Aluno("josé");
const aluno2 = new Aluno("maria");
const aluno3 = new Aluno("joão");

escola.adicionarAluno(aluno1);
escola.adicionarAluno(aluno2);
escola.adicionarAluno(aluno3);
escola.adicionarAluno(new Aluno("gustavo")); //assim é mais pratico

console.log("nome:", escola);
