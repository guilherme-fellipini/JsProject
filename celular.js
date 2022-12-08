let celular = function () {
  this.cor = "prata";

  this.ligar = function () {
    console.log("ligação chamando");
    return "Ligando. . .";
  };
};

let objeto = new celular();

console.log(objeto.ligar());
