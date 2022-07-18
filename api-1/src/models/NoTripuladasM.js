const mongoose = require("mongoose");

const NoTripuladasSchema = new mongoose.Schema({
  id: { type: String },
  nombre: { type: String },
  uso: { type: String },
  tipo: { type: String },
  empuje: { type: String },
  tiempoViaje: { type: String },
});

const NoTripuladas = mongoose.model("NoTripuladas", NoTripuladasSchema);

module.exports = NoTripuladas;
