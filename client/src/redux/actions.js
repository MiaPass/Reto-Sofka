import axios from "axios";

import {
  GET_ALL,
  SET_DEFAULT,
  FILTER,
  POST_ITEM,
  POST_ITEM_1,
  DELETE_ITEM,
} from "../constants";

/*-------------- GET --------------*/

export function getAll() {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/naves/all`)
      .then((res) => {
        dispatch({ type: GET_ALL, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("GetAll-Actions: Something went wrong...");
      });
  };
}

/*-------------- SET DEFAULT --------------*/

export function defaultPage(payload) {
  return function (dispatch) {
    dispatch({ type: SET_DEFAULT, payload: payload });
  };
}

/*-------------- FILTER --------------*/

export function filter(payload) {
  return function (dispatch) {
    dispatch({ type: FILTER, payload: payload });
  };
}

/*-------------- CREATE --------------*/

export function createItem(form) {
  return function (dispatch) {
    // console.log(form);
    return axios
      .post(`http://localhost:3001/naves/create`, form)
      .then((res) => {
        dispatch({ type: POST_ITEM, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("CreateItem-Actions: Something went wrong...");
      });
  };
}

export function createItemOne(form) {
  return function (dispatch) {
    // console.log(form);
    return axios
      .post(`http://localhost:3001/naves/create/firstime/`, form)
      .then((res) => {
        dispatch({ type: POST_ITEM_1, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("CreateItem-Actions: Something went wrong...");
      });
  };
}

/*-------------- DELETE --------------*/

export function deleteItem(id) {
  return function (dispatch) {
    return axios
      .delete(`http://localhost:3001/naves/delete/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_ITEM, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("DeleteItem-Actions: Something went wrong...");
      });
  };
}
