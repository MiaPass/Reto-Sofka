import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import LCard from "./LanzaderasCards";
import NTCard from "./NoTripuladasCards";
import TCard from "./TripuladasCards";

test("Renderiza las naves lanzaderas en la pagina de inicio", () => {
  const contLCard = {
    nombre: "Lanzaderas 1",
    uso: "",
    tipo: "Lanzaderas",
    peso: "1800",
    empuje: "4000",
    capacidadTransporte: "97",
    altura: "80",
    id: "1Lan",
  };
  const contNTCard = {
    nombre: "NoTripuladas 1",
    uso: "",
    tipo: "NoTripuladas",
    empuje: "4000",
    tiempoViaje: "12 años",
    id: "1NoTrip",
  };
  const contTCard = {
    nombre: "Tripuladas 1",
    uso: "",
    tipo: "Tripuladas",
    peso: "310",
    distanciaOrbita: "251",
    cantPersonas: "3",
    id: "1Trip",
  };
  const componentLCard = render(<LCard items={contLCard} />);
  const componentNTCard = render(<NTCard items={contNTCard} />);
  const componentTCard = render(<TCard items={contTCard} />);

  expect(componentLCard.container).toHaveTextContent("Lanzaderas 1");
});

test("Renderiza las naves no tripuladas en la pagina de inicio", () => {
  const contNTCard = {
    nombre: "NoTripuladas 1",
    uso: "",
    tipo: "NoTripuladas",
    empuje: "4000",
    tiempoViaje: "12 años",
    id: "1NoTrip",
  };
  const contTCard = {
    nombre: "Tripuladas 1",
    uso: "",
    tipo: "Tripuladas",
    peso: "310",
    distanciaOrbita: "251",
    cantPersonas: "3",
    id: "1Trip",
  };

  const componentNTCard = render(<NTCard items={contNTCard} />);
  const componentTCard = render(<TCard items={contTCard} />);

  expect(componentNTCard.container).toHaveTextContent("NoTripuladas 1");
});

test("Renderiza las naves tripuladas en la pagina de inicio", () => {
  const contTCard = {
    nombre: "Tripuladas 1",
    uso: "",
    tipo: "Tripuladas",
    peso: "310",
    distanciaOrbita: "251",
    cantPersonas: "3",
    id: "1Trip",
  };

  const componentTCard = render(<TCard items={contTCard} />);

  expect(componentTCard.container).toHaveTextContent("Tripuladas 1");
});
