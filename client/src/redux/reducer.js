import {
  GET_ALL,
  SET_DEFAULT,
  FILTER,
  POST_ITEM,
  POST_ITEM_1,
  DELETE_ITEM,
} from "../constants";

const initialState = {
  allItems: [],
  filteredItems: [],
  newItem: {},
  primeraVez: [],
  deleteItem: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    /*-------------- GET --------------*/

    case GET_ALL:
      return {
        ...state,
        allItems: payload,
        filteredItems: payload,
      };

    /*-------------- SET DEFAULT --------------*/

    case SET_DEFAULT:
      return {
        ...state,
        filteredItems: state.allItems,
      };

      // eslint-disable-next-line
      break;

    /*-------------- FILTER --------------*/

    case FILTER:
      if (payload !== "Default") {
        const filtered = state.allItems.filter((t) => {
          return t.tipo === payload;
        });
        return {
          ...state,
          filteredItems: filtered,
        };
      } else {
        return {
          ...state,
          filteredItems: state.allItems,
        };
      }

      // eslint-disable-next-line
      break;

    /*-------------- CREATE --------------*/

    case POST_ITEM:
      return {
        ...state,
        newItem: payload,
      };

    case POST_ITEM_1:
      return {
        ...state,
        primeraVez: payload,
      };

    /*-------------- DELETE --------------*/

    case DELETE_ITEM:
      return {
        ...state,
        deleteItem: payload,
      };

    /*-------------- ABSOLUTE DEFAULT --------------*/

    default:
      return state;
  }
}
