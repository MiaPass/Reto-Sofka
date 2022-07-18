import React, { useState } from "react";
import { Link } from "react-router-dom";

import LanzaderaForm from "./LanzaderaForm";
import NoTripuladaForm from "./NoTripuladaForm";
import TripuladaForm from "./TripuladaForm";

import "./create.css";

export default function Create() {
  const [type, setType] = useState("");

  const handleSelectType = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };

  return (
    <div className="create-container">
      <h2> Elige tipo de Nave</h2>

      <div className="create-buttons">
        <button onClick={(e) => handleSelectType(e)} value="Lanzaderas">
          {" "}
          Lanzaderas{" "}
        </button>

        <button onClick={(e) => handleSelectType(e)} value="No Tripulada">
          {" "}
          No Tripulada{" "}
        </button>

        <button onClick={(e) => handleSelectType(e)} value="Tripulada">
          {" "}
          Tripulada{" "}
        </button>
      </div>

      {type === "Lanzaderas" ? (
        <LanzaderaForm types={type} />
      ) : type === "No Tripulada" ? (
        <NoTripuladaForm types={type} />
      ) : type === "Tripulada" ? (
        <TripuladaForm types={type} />
      ) : (
        <label />
      )}

      <Link to={`/`}>
        <button
          style={{
            marginTop: "20px",
          }}
        >
          {" "}
          Inicio{" "}
        </button>
      </Link>
    </div>
  );
}
