import React from "react";

import "./cards.css";

export default function LCard(items) {
  const nave = items.items;

  return (
    <div id="div">
      <ul>Nombre: {nave.nombre}</ul>
      <ul>Uso: {nave.uso}</ul>
      <ul>Empuje: {nave.empuje}</ul>
      <ul>Peso: {nave.peso}</ul>
      <ul>Altura: {nave.altura}</ul>
      <ul>Capacidad de Transporte: {nave.capacidadTransporte}</ul>
    </div>
  );
}
