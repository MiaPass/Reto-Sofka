const router = require("express").Router();

const Lanzaderas = require("../controllers/clases/lanzaderasC");
const NoTripuladasC = require("../controllers/clases/notripuladasC");
const Tripuladas = require("../controllers/clases/tripuladasC");

const {
  getAll,
  search,
  newShip,
  deleteItem,
  firstTime,
} = require("../controllers/functions/funtions");

router.get("/all", (req, res) => {
  getAll()
    .then((result) => res.json(result))
    .catch((err) => console.log("navesR: getAll  -->  ", err));
});

router.get("/search/:data", (req, res) => {
  const { data } = req.params;
  search(data)
    .then((result) => res.json(result))
    .catch((err) => console.log("navesR: search  -->  ", err));
});

router.post("/create", (req, res) => {
  const form = req.body;
  // console.log(req.body);
  if (form.tipo === "Lanzaderas") {
    var lanzadera = new Lanzaderas(
      form.empuje,
      form.peso,
      form.capacidadTransporte,
      form.altura,
      form.uso,
      form.nombre
    );

    newShip(lanzadera)
      .then((result) => res.send({ message: "Nave Creada", nave: result }))
      .catch((error) => console.log("navesR: post Lanzaderas  -->  ", error));
  } else if (form.tipo === "No Tripuladas") {
    var noTrip = new NoTripuladasC(
      form.empuje,
      form.tiempoV,
      form.tipoV,
      form.uso,
      form.nombre
    );
    newShip(noTrip)
      .then((result) => res.send({ message: "Nave Creada", nave: result }))
      .catch((error) => console.log("navesR: post NoTripuladas  -->  ", error));
  } else if (form.tipo === "Tripuladas") {
    var trip = new Tripuladas(
      form.peso,
      form.distanciaOrbita,
      form.cantPersonas,
      form.uso,
      form.nombre
    );
    newShip(trip)
      .then((result) => res.send({ message: "Nave Creada", nave: result }))
      .catch((error) => console.log("navesR: post Tripuladas  -->  ", error));
  }
});

router.post("/create/firstime/", (req, res) => {
  const form = req.body;
  firstTime(form)
    .then((result) => res.json(result))
    .catch((err) => console.log("navesR: createfirst  -->  ", err));
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  deleteItem(id)
    .then((result) => res.send({ message: "Nave Eliminada", nave: result }))
    .catch((err) => console.log("navesR: deleteItem  -->  ", err));
});

module.exports = router;
