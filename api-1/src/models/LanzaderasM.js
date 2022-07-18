const mongoose = require("mongoose");

const LanzaderasSchema = new mongoose.Schema({
  id: { type: String },
  nombre: { type: String },
  uso: { type: String },
  tipo: { type: String },
  peso: { type: String },
  empuje: { type: String },
  capacidadTransporte: { type: String },
  altura: { type: String },
});

const Lanzaderas = mongoose.model("Lanzaderas", LanzaderasSchema);

module.exports = Lanzaderas;
