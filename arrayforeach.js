// let agora = new Date();

// console.log(agora.toLocaleDateString("pt-BR"));

let carros = [
  "palio 98",
  "toro",
  "uno",
  "marea turbo",
  10,
  true,
  new Date(),
  function () {},
];

// console.log(carros[6].getFullYear()); pega de dentro do aray
//console.log(carros[7]()); // se tivesse com parametro ou executando algo tinha rodado o codigo normal a function
// console.log(carros.length);
//forEach - laço para percorrer um array

carros.forEach(function (
  valoritemoqtaescritoaidentrovalue,
  queposicaoqeletadentrodomeuarrayindex
) {
  console.log(
    queposicaoqeletadentrodomeuarrayindex,
    valoritemoqtaescritoaidentrovalue
  );
});

//this - comando interno usado para referenciar a um atributo a um metodo naquela classe na mesma classe
//classe - conjunto de atributos/minha informacao armazeno  e metodos/as ações que devem acontecer
//new - calculator let calculator = new calculator ou o nome da classe.. nova instância - vira um objeto e tem acesso aos atributos e os metodos da classe.
//quanto mais inteligente for a classe mais limpo vai ser o codigo no final
