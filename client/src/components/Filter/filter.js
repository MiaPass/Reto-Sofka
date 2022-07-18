import React from "react";
import { useDispatch } from "react-redux";

import { filter } from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();

  const handleSelectFilter = (e) => {
    e.preventDefault();
    dispatch(filter(e.target.value));
  };

  return (
    <label>
      <select
        onChange={(e) => handleSelectFilter(e)}
        style={{
          height: "30px",
        }}
      >
        <option value="Default"> Tipo de Nave </option>
        <option value="Lanzaderas"> Lanzaderas </option>
        <option value="NoTripuladas"> No Tripuladas </option>
        <option value="Tripuladas"> Tripuladas </option>
      </select>
    </label>
  );
}
