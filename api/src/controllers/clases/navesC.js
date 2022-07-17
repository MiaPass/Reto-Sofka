class Naves {
  constructor(uso, nombre, tipo) {
    this.uso = uso;
    this.nombre = nombre;
    this.tipo = tipo;
  }

  log() {
    console.log(this.tipo);
  }
}

module.exports = Naves;
