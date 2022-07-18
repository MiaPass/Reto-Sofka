import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createItem } from "../../redux/actions";

export default function TripuladaForm(types) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    nombre: "",
    uso: "",
    tipo: types.types,
    peso: "",
    distanciaOrbita: "",
    cantPersonas: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var date1 = new Date();
    var date2 = Date.parse(date1);

    if (!form.nombre) {
      form.nombre = form.tipo + date2;
    } else if (!form.uso) {
      form.uso = "No especificado";
    } else {
      dispatch(createItem(form));
      alert("Nave " + form.nombre + " creada");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm({
      nombre: "",
      uso: "",
      tipo: types.types,
      peso: "",
      distanciaOrbita: "",
      cantPersonas: "",
    });
  };

  const handleInput = (e) => {
    e.preventDefault();
    let nombre = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [nombre]: value,
    });
  };

  const handleNum = (e) => {
    e.preventDefault();
    let nombre = e.target.name;
    let value = e.target.value;
    if (typeof value === "number") {
      alert("El campo " + nombre + " solo puede contener numeros");
    } else {
      setForm({
        ...form,
        [nombre]: value,
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Nave Tripulada</h3>
      <ul>
        <h4>Nombre:</h4>
        <input
          name="nombre"
          type="text"
          placeholder=" Nombre..."
          value={form.nombre}
          onChange={(e) => handleInput(e)}
        />
      </ul>
      <ul>
        <h4>Uso:</h4>
        <textarea
          name="uso"
          type="text"
          placeholder=" Uso..."
          value={form.uso}
          onChange={(e) => handleInput(e)}
        />
      </ul>

      <ul>
        <h4>Peso (en toneladas)*:</h4>
        <input
          name="peso"
          type="number"
          placeholder=" Peso..."
          value={form.peso}
          onChange={(e) => handleNum(e)}
          required
        />
      </ul>
      <ul>
        <h4>Distancia en orbita (en kilometros)*:</h4>
        <input
          name="distanciaOrbita"
          type="number"
          placeholder=" Distancia..."
          value={form.distanciaOrbita}
          onChange={(e) => handleNum(e)}
          required
        />
      </ul>
      <ul>
        <h4>Cantidad de personas*:</h4>
        <input
          name="cantPersonas"
          type="number"
          placeholder=" Cantidad de personas..."
          value={form.cantPersonas}
          onChange={(e) => handleNum(e)}
          required
        />
      </ul>

      <hr />

      <div>
        <button type="reset" onClick={(e) => handleReset(e)}>
          {" "}
          Restablecer{" "}
        </button>
        <button type="submit"> Guardar </button>
        <div />
      </div>
    </form>
  );
}
