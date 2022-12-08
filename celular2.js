class celular {
  constructor() {
    this.cor = "prata";
  }
  ligar() {
    console.log("ligação chamando");
    return "Ligando. . .";
  }
}

let objeto = new celular();

console.log(objeto.ligar());
