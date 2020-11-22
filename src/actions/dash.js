import axios from "axios";
import {
  SELECT_SLOT,
  SELECT_COMPANY,
  BOOK_SLOT,
  GET_SLOTS,
  LOGOUT,
  LOAD_COMP,
  GET_BOOKS,
  GET_COMP
} from "./types";
import { setAlert } from "./alert";

//select company
export const selComp = ({ id }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const body = JSON.stringify({ id });

    const res = await axios.post("api/register/getAdmin", body, config);

    dispatch({
      type: GET_COMP,
      payload: res.data
    });

    dispatch({
      type: SELECT_COMPANY,
      payload: id
    });

    dispatch(getSlots({ id }));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
  }
};

//get slots
export const getSlots = ({ id }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ id });

  try {
    const res = await axios.post("/book/getSlots", body, config);

    dispatch({
      type: GET_SLOTS,
      payload: res.data
    });

    dispatch(getBookDets({ slots: res.data }));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
  }
};

//book slots
export const bookSlot = ({ selected, uid }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    if (uid) {
      const body = JSON.stringify({ selected, uid });

      const res = await axios.post("/book/bookSlots/user", body, config);

      dispatch({
        type: BOOK_SLOT
      });
    } else {
      const body = JSON.stringify({ selected });

      const res = await axios.post("/book/bookSlots/admin", body, config);

      dispatch({
        type: BOOK_SLOT
      });
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
  }
};

//get companies
export const getComp = () => async dispatch => {
  try {
    const res = await axios.get("/book/getComp");

    dispatch({
      type: LOAD_COMP,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
  }
};

//get booking details
export const getBookDets = ({ slots }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const body = JSON.stringify({ slots });

    const res = await axios.post("/book/getBookDets", body, config);

    dispatch({
      type: GET_BOOKS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
  }
};

//remove slots
export const remSlots = () => dispatch => {
  dispatch({ type: LOGOUT });
};
