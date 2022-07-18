const Naves = require("./navesC");

class Lanzaderas extends Naves {
  constructor(empuje, peso, capacidadTransporte, altura, uso, nombre) {
    super(uso, nombre);

    this.uso = uso;
    this.nombre = nombre;
    this.tipo = "Lanzaderas";
    this.empuje = empuje + " tonelada/s";
    this.peso = peso + " tonelada/s";
    this.altura = altura + " metro/s";
    this.capacidadTransporte = capacidadTransporte + " tonelada/s";
  }

  log() {
    console.log(this.tipo);
  }
}

module.exports = Lanzaderas;
