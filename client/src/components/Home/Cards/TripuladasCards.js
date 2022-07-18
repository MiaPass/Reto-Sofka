import React from "react";

import "./cards.css";

export default function TCard(items) {
  const nave = items.items;

  return (
    <div id="div">
      <ul>Nombre: {nave.nombre}</ul>
      <ul>Uso: {nave.uso}</ul>
      <ul>Peso: {nave.peso}</ul>
      <ul>Distancia en Orbita: {nave.distanciaOrbita}</ul>
      <ul>Cantidad de Personas: {nave.cantPersonas}</ul>
    </div>
  );
}
