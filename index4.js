// function calc(x1, x2, operator) {
//   return eval(`${x1} ${operator} ${x2}`);
// }

// //argumentos ou parametros - informacoes que as funcoes precisam
// // argumentos ou args permitem acessar parametros de uma funcao

// let resultadocalculo = calc(10, 14, "+");

// console.log(resultadocalculo);

let calc = (x1, x2, operator) => {
  return eval(`${x1} ${operator} ${x2}`);
};

let resultadocalculo = calc(10, 14, "+");

console.log(resultadocalculo);
//callback funcao de retorno como parametro dentro de uma acao
//DOM document object model = a estrutura de como o html é formado
