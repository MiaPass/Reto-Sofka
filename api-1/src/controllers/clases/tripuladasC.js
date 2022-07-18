const Naves = require("./navesC");

class Tripuladas extends Naves {
  constructor(peso, distanciaOrbita, cantPersonas, uso, nombre) {
    super(uso, nombre);

    this.uso = uso;
    this.nombre = nombre;
    this.tipo = "Tripuladas";
    this.peso = peso + " tonelada/s";
    this.distanciaOrbita = distanciaOrbita + " kilometro/s";
    this.cantPersonas = cantPersonas + " persona/s";
  }

  log() {
    console.log(this.tipo);
  }
}

module.exports = Tripuladas;
