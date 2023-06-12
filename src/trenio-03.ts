interface Estado {
  nome: string;
}

interface Cidade {
  nome: string;
  estado: Estado;
}

interface Endereco {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string;
}

const endereco: Endereco = {
  bairro: "bairro",
  rua: "rua",
  cidade: {
    nome: "cidade",
    estado: {
      nome: "São Paulo",
    },
  },
};

console.log(endereco.complemento?.substring(3) || "COMPLEMENTO ESTA VAZIA");
console.log(endereco);
