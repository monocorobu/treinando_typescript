/* let test;

if (test === null) {
    console.log("teste2 é ", test);
} else {
    console.log("não é nulo");
}

console.log("test é:", test);
//undefined diferente de nulo

const funcaoTestUndefined = (): void => {
    console.log("funcaoTestUndefined");
};

funcaoTestUndefined(); */

interface Andar {
    passos?: number | null;
}
const andar: Andar = {
    passos: null,
};

const funcaoTest = (): undefined | number => {
    if (andar.passos && andar.passos > 5) {
        return 543;
    }
    return undefined;
};

const eNumero = funcaoTest();

if (!andar.passos) {
    console.log("é nulo");
}

if (eNumero) {
    eNumero.toFixed();
}

console.log("andar", andar);
