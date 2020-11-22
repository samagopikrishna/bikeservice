import {
  SELECT_SLOT,
  SELECT_COMPANY,
  BOOK_SLOT,
  GET_SLOTS,
  LOGOUT,
  LOAD_COMP,
  GET_BOOKS,
  GET_COMP
} from "../actions/types";

const initialState = {
  cid: null,
  slots: null,
  slotsLoaded: false,
  selected: null,
  comps: null,
  compLoaded: false,
  loading: false,
  bookings: null,
  bookLoaded: false,
  comp: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_COMPANY:
      return {
        ...state,
        cid: payload
      };
    case GET_SLOTS:
      return {
        ...state,
        slots: payload,
        slotsLoaded: true,
        loading: false
      };
    case BOOK_SLOT:
      return {
        ...state,
        slotsLoaded: false,
        loading: true
      };
    case GET_COMP:
      return {
        ...state,
        comp: payload
      };
    case LOAD_COMP:
      return {
        ...state,
        comps: payload,
        compLoaded: true
      };
    case GET_BOOKS:
      return {
        ...state,
        bookings: payload,
        bookLoaded: true
      };
    case LOGOUT:
      return {
        ...state,
        cid: null,
        slotsLoaded: false,
        compLoaded: false
      };
    default:
      return state;
  }
}
