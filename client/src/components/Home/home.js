import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Filter from "../Filter/filter";
import { getAll, deleteItem, createItemOne } from "../../redux/actions";

import LCard from "./Cards/LanzaderasCards";
import NTCard from "./Cards/NoTripuladasCards";
import TCard from "./Cards/TripuladasCards";

import { first } from "../../constants";

import "./home.css";

export default function Home() {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(getAll());
    dispatch(createItemOne(first));
  }, [dispatch]);

  const handleDelete = (e, nave) => {
    e.preventDefault();
    setActive(!active);
    dispatch(deleteItem(nave._id));
    alert("Nave " + nave.nombre + "eliminada");
  };

  const { filteredItems } = useSelector((state) => state);

  const lanzaderas = filteredItems.filter((nave) => {
    return nave.tipo.includes("Lanzaderas");
  });
  const notripuladas = filteredItems.filter((nave) => {
    return nave.tipo.includes("NoTripuladas");
  });
  const tripuladas = filteredItems.filter((nave) => {
    return nave.tipo === "Tripuladas";
  });

  return (
    <div className="container">
      <div className="options">
        <Filter />
        <Link to={`/Nueva-Nave`}>
          <button> Crea una nueva nave </button>
        </Link>
      </div>

      {filteredItems.length ? (
        <div className="ships">
          {lanzaderas.length ? (
            <div className="lanzaderas">
              <h2> Naves Lanzaderas: </h2>
              {lanzaderas.map((nave) => {
                const id = nave.id || nave._id;
                return (
                  <div key={id} id="naves">
                    <LCard items={nave} />
                    <button
                      className="buttonDelete"
                      onClick={(e) => handleDelete(e, nave)}
                    >
                      Eliminar Nave
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="lanzaderas">
              <h4 id="naves" style={{ border: "0px" }}>
                No hay naves lanzaderas creadas
              </h4>
            </div>
          )}

          {notripuladas.length ? (
            <div className="notripuladas">
              <h2> Naves No Tripuladas: </h2>
              {notripuladas.map((nave) => {
                const id = nave.id || nave._id;
                return (
                  <div key={id} id="naves">
                    <NTCard items={nave} />
                    <button
                      className="buttonDelete"
                      onClick={(e) => handleDelete(e, nave)}
                    >
                      Eliminar Nave
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="notripuladas">
              <h4 id="naves" style={{ border: "0px" }}>
                No hay naves no tripuladas creadas
              </h4>
            </div>
          )}

          {tripuladas.length ? (
            <div className="tripuladas">
              <h2> Naves Tripuladas: </h2>
              {tripuladas.map((nave) => {
                const id = nave.id || nave._id;
                return (
                  <div key={id} id="naves">
                    <TCard items={nave} />
                    <button
                      className="buttonDelete"
                      onClick={(e) => handleDelete(e, nave)}
                    >
                      Eliminar Nave
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="tripuladas">
              <h4 id="naves" style={{ border: "0px" }}>
                No hay naves tripuladas creadas
              </h4>
            </div>
          )}
        </div>
      ) : (
        <h2>No hay naves creadas</h2>
      )}
    </div>
  );
}
