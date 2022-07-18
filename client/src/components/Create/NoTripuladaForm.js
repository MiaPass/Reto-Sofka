import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createItem } from "../../redux/actions";

export default function NoTripuladaForm(types) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    nombre: "",
    uso: "",
    tipo: types.types,
    empuje: "",
    tiempoV: "",
    tipoV: "",
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
      empuje: "",
      tiempoV: "",
      tipoV: "",
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
      <h3>Nave No Tripulada</h3>
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
        <h4>Empuje (en toneladas)*:</h4>
        <input
          name="empuje"
          type="number"
          placeholder=" Empuje..."
          value={form.empuje}
          onChange={(e) => handleNum(e)}
          required
        />
      </ul>

      <ul>
        <label>
          <h4>Tiempo de viaje (solo numero)*:</h4>
          <input
            name="tiempoV"
            type="number"
            placeholder=" Tiempo de viaje..."
            value={form.tiempoV}
            onChange={(e) => handleNum(e)}
            required
          />
        </label>
        <label>
          <h4>Tipo de tiempo de viaje (ejemplo: meses, años)*:</h4>
          <input
            name="tipoV"
            type="text"
            placeholder=" Tipo de viaje..."
            value={form.tipoV}
            onChange={(e) => handleInput(e)}
            required
          />
        </label>
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
