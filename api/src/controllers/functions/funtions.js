const axios = require("axios");

const Lanzaderas = require("../../models/LanzaderasM");
const NoTripuladas = require("../../models/NoTripuladasM");
const Tripuladas = require("../../models/TripuladasM");
const NoTripuladasC = require("../clases/notripuladasC");

const getAll = async () => {
  try {
    let result = [];

    /* Lanzaderas */

    let lanzaderas = await Lanzaderas.find();
    // console.log(lanzaderas);
    result = [...result, ...lanzaderas];

    /* NoTripuladas */

    let noTrip = await NoTripuladas.find();
    // console.log(noTrip);
    result = [...result, ...noTrip];

    /* Tripuladas */

    let trip = await Tripuladas.find();
    // console.log(trip);
    result = [...result, ...trip];

    // console.log(result);
    return result;
  } catch (error) {
    console.log("functions: getAll -->  ", error);
  }
};

const search = async (data) => {
  try {
    let result = [];

    /* Lanzaderas */

    let lanzaderas = await Lanzaderas.find({ nombre: data });
    result = [...result, ...lanzaderas];

    /* NoTripuladas */

    let noTrip = await NoTripuladas.find({ nombre: data });
    console.log(noTrip);
    result = [...result, ...noTrip];

    /* Tripuladas */

    let trip = await Tripuladas.find({ nombre: data });
    result = [...result, ...trip];

    console.log(result);
    return result;
  } catch (error) {
    console.log("functions: search  -->  ", error);
  }
};

const newShip = async (data) => {
  try {
    console.log(data);
    switch (data.tipo) {
      case "Lanzaderas":
        var lanzadera = new Lanzaderas({
          empuje: data.empuje,
          peso: data.peso,
          capacidadTransporte: data.capacidadTransporte,
          altura: data.altura,
          uso: data.uso,
          nombre: data.nombre,
          tipo: data.tipo,
        });
        // console.log(lanzadera);
        const lanzaderas = await lanzadera.save();
        return lanzaderas.tipo;
      case "No Tripuladas":
        var noTrip = new NoTripuladas({
          empuje: data.empuje,
          tiempoViaje: data.tiempoViaje,
          uso: data.uso,
          nombre: data.nombre,
          tipo: data.tipo,
        });
        // console.log(noTrip);
        const notripu = await noTrip.save();
        return notripu.tipo;
      case "Tripuladas":
        var trip = new Tripuladas({
          peso: data.peso,
          distanciaOrbita: data.distanciaOrbita,
          cantPersonas: data.cantPersonas,
          uso: data.uso,
          nombre: data.nombre,
          tipo: data.tipo,
        });
        // console.log(trip);
        const tripu = await trip.save();
        return tripu.tipo;
    }
  } catch (error) {
    console.log("functions: newShip  -->  ", error);
    return error;
  }
};

/* Esta funcion crea 9 naves (3 de cada tipo) cuando se inicia el front para tener de ejemplo  */

const firstTime = async (data) => {
  try {
    // console.log(data[0]);
    const first = await Lanzaderas.find(
      { id: data[0].id } || { id: data[1].id } || { id: data[2].id }
    );
    const second = await NoTripuladas.find(
      { id: data[3].id } || { id: data[4].id } || { id: data[5].id }
    );
    const third = await Tripuladas.find(
      { id: data[6].id } || { id: data[7].id } || { id: data[8].id }
    );

    // console.log(first);
    if (first.length === 0 && second.length === 0 && third.length === 0) {
      data.map(async (nave) => {
        // console.log(nave);
        switch (nave.tipo) {
          case "Lanzaderas":
            var lanzadera = new Lanzaderas({
              nombre: nave.nombre,
              uso: nave.uso,
              tipo: nave.tipo,
              peso: nave.peso,
              empuje: nave.empuje,
              capacidadTransporte: nave.capacidadTransporte,
              altura: nave.altura,
              id: nave.id,
            });
            // console.log(lanzadera);
            await lanzadera.save();
            break;
          case "NoTripuladas":
            var noTripu = new NoTripuladasC(
              nave.empuje,
              nave.tiempoV,
              nave.tipoV,
              nave.uso,
              nave.nombre
            );
            // console.log(noTripu);
            var noTrip = new NoTripuladas({
              nombre: noTripu.nombre,
              uso: noTripu.uso,
              tipo: noTripu.tipo,
              empuje: noTripu.empuje,
              tiempoViaje: noTripu.tiempoViaje,
              id: nave.id,
            });
            // console.log(noTrip);
            await noTrip.save();
            break;
          case "Tripuladas":
            var trip = new Tripuladas({
              peso: nave.peso,
              distanciaOrbita: nave.distanciaOrbita,
              cantPersonas: nave.cantPersonas,
              uso: nave.uso,
              nombre: nave.nombre,
              tipo: nave.tipo,
              id: nave.id,
            });
            // console.log(trip);
            await trip.save();
            break;
        }
      });
    }
  } catch (error) {
    console.log("functions: firstTime  -->  ", error);
  }
};

const deleteItem = async (id) => {
  try {
    /* Lanzaderas */
    let lanzadera = await Lanzaderas.findById(id);

    /* NoTripuladas */

    let noTrip = await NoTripuladas.findById(id);

    /* Tripuladas */

    let trip = await Tripuladas.findById(id);

    if (lanzadera) {
      const deleteLanzadera = await lanzadera.remove();
      return deleteLanzadera.tipo;
    } else if (noTrip) {
      const deleteNoTrip = await noTrip.remove();
      return deleteNoTrip.tipo;
    } else if (trip) {
      const deleteTrip = await trip.remove();
      console.log(deleteTrip.tipo);
      return deleteTrip.tipo;
    } else {
      var message = "Nave No Encontrada";
      return message;
    }
  } catch (error) {
    console.log("functions: deleteItem  -->  ", error);
  }
};

module.exports = { getAll, search, newShip, deleteItem, firstTime };
