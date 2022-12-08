/** Começando a loucura do javascript
 * boa sorte
 * feito por : Guilherme Martins 08/12/2022 obrigado!
 */

// console.log("Ola mundo!");

var olaMundo = "Olá mundo conteudo!";

console.log(olaMundo);
console.log(olaMundo);
console.log(olaMundo);
console.log("oi brow");

// aqui so precisa mudar o conteudo da variavel pra alterar em todos os lugares que tem a variavel inserida
// comando let - declara variáveis definindo o escopo de atuação/leva em conta o escopo em que foi definida
// const declara constantes - valor declarado nela não pode mudar nunca ex: conexão com banco de dados..
// constante é constante, variavel é variavel =)

//Array - variaveis com o mesmo nome e tipo - armazenando mais de um valor - serie de variaveis em uma mesma variavel, so que vc vai indexar esses valores : pegar o 1 valor de uma variavel index 0 e ir até o ultimo index dessa variavel -
//typeOf vê o tipo de dado da variavel
//instanceof confirma de qual instancia ou objeto veio aquela variavel - tipo instancia de um array
// no js as variaveis sao fracamente tipadas tipo de dado variavel - linguagem dinâmica -
//funcoes de conversao - parseInt, parseFloat, toString

let a = 10;
const b = "10";

console.log(a == b && typeof a == "string");
console.log(a == b || typeof a == "string");

// = atribuição
// == compara o valor de duas expressoes
// === compara o valor e o tipo de dados - verdade absoluta

// != compara só o valor e ignora o tipo de dado
// !== compara se o valor e tipo são diferentes

// && and pra comparar com 2 condições - se as 2 forem verdadeira da true, se qualquer uma for falsa da false
// || pipe/whore so vai ser falso se tudo for falso, se uma for verdadeira da true

let cor = "amarelo";

if (cor === "verde") {
  console.log("siga");
} else if (cor === "amarelo") {
  console.log("Atenção");
} else {
  console.log("pare");
}

//bloco de chaves executado / if(condicao){instruções}  /
