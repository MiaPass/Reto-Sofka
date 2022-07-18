import React from "react";

import "./cards.css";

export default function NTCard(items) {
  const nave = items.items;

  return (
    <div id="div">
      <ul>Nombre: {nave.nombre}</ul>
      <ul>Uso: {nave.uso}</ul>
      <ul>Empuje: {nave.empuje}</ul>
      <ul>Tiempo de viaje aproximado: {nave.tiempoViaje}</ul>
    </div>
  );
}
