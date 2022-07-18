const mongoose = require("mongoose");

const TripuladasSchema = new mongoose.Schema({
  id: { type: String },
  nombre: { type: String },
  uso: { type: String },
  tipo: { type: String },
  peso: { type: String },
  distanciaOrbita: { type: String },
  cantPersonas: { type: String },
});

const Tripuladas = mongoose.model("Tripuladas", TripuladasSchema);

module.exports = Tripuladas;
