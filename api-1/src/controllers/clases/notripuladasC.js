const Naves = require("./navesC");

class NoTripuladasC extends Naves {
  //   "tiempoV es cantidad (1, 8, 3) mientras que tipoV es meses, años";
  constructor(empuje, tiempoV, tipoV, uso, nombre, tipo) {
    super(uso, nombre, tipo);

    this.uso = uso;
    this.nombre = nombre;
    this.tipo = "NoTripuladas";
    this.empuje = empuje + " tonelada/s";
    this.tiempoViaje = tiempoV + " " + tipoV;
  }

  log() {
    console.log(this.tipo);
  }
}

module.exports = NoTripuladasC;
