const funcaoCallBack = (y: number): void => {
  console.log("retornou o numero: " + y);
};

const funcaTesteCallBack = (
  valor1: number,
  valor2: number,
  callback: (n: number) => void,
): string => {
  if (valor1 > valor2) {
    callback(valor1);
  } else {
    callback(valor2);
  }

  return "";
};

funcaTesteCallBack(54, 32, funcaoCallBack);

funcaTesteCallBack(54, 32, (x: number) => {
  console.log("retornou o numero na funcao 2: " + x);
});
