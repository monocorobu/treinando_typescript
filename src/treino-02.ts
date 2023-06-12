interface Pessoas {
  nome: string;
  idade: number;
}

interface Usuarios {
  pessoas: Pessoas[];
  cidade: string;
}

const usuario: Usuarios = {
  cidade: "São Paulo",
  pessoas: [
    { nome: "João", idade: 32 },
    { nome: "Pedro", idade: 32 },
    { nome: "Matheus", idade: 32 },
    { nome: "Jorge", idade: 32 },
  ],
};

console.log(usuario);
