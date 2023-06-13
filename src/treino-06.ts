class Outro {
  endereco: string;

  constructor() {
    this.endereco = "Rua dos bobos";
  }
}

interface Carro {
  idade: number;
  nome: string;
}

interface Bicicleta {
  rodas: number;
}

const funcao = (validacao: boolean): Carro | Bicicleta | Outro => {
  if (validacao) {
    return {
      idade: 32,
      nome: "GOL",
    };
  }
  return {
    rodas: 4,
  };
};

const resultado = funcao(true);

// se for classe
if (resultado instanceof Outro) {
  console.log("passou aqui");
}
// se for o tipo certo
if ("idade" in resultado) {
  console.log(resultado.nome);
  resultado.nome;
}

//forma nativa
if ("idade" in resultado) {
  if (typeof resultado.idade === "string") {
    console.log(resultado.idade);
  }
}
// se for bike
if ("rodas" in resultado) {
  console.log(resultado.rodas);
  resultado.rodas;
}
