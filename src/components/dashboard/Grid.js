import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { registerAdmin } from "../../actions/auth";
import { bookSlot, getSlots } from "../../actions/dash";
import { BOOK_SLOT } from "../../actions/types";

const Grid = ({ slots, bookSlot, getSlots, id, user, loading }) => {
  useEffect(() => {
    getSlots({ id });
  }, []);

  const [formData, setFormData] = useState({
    selected: {}
  });

  const { selected } = formData;

  var d1 = new Date("2019-11-07");
  var d2 = new Date(d1);
  d2.setDate(d1.getDate() + 1);
  var d3 = new Date(d2);
  d3.setDate(d2.getDate() + 1);

  const onClick = xid => {
    var y = formData.selected;
    if (user.profile === "user") {
      y = {};
    }

    const x = y[xid];

    if (x) {
      delete y[xid];
      setFormData({ ...formData, selected: y });
    } else {
      y[xid] = xid;

      setFormData({ ...formData, selected: y });
    }
  };

  const handleBook = selected => {
    var uid;
    if (user.profile === "user") {
      uid = user._id;
      bookSlot({ selected, uid });
    } else {
      bookSlot({ selected, uid });
    }

    getSlots({ id });

    setFormData({ ...formData, selected: {} });
  };

  return (
    <div className="border p-2 shadow-sm p-3 mb-5 bg-white rounded">
      <span className="m-3">{`${d1.getDate()} - ${d1.getMonth() +
        1} - ${d1.getFullYear()}`}</span>
      <div className="row m-2">
        {slots.slice(0, 6).map(item => (
          <div className="col-2 p-1 m-0">
            <button
              type="button"
              className={`btn btn-${
                item.booked || selected[item.id] ? "" : "outline-"
              }${selected[item.id] ? "primary" : "danger"} `}
              id={item.id}
              key={item.id}
              onClick={item.booked ? {} : () => onClick(item.id)}
            >
              {item.time}
            </button>
          </div>
        ))}
      </div>
      <span className="m-3">{`${d2.getDate()}-${d2.getMonth() +
        1}-${d2.getFullYear()}`}</span>
      <div className="row m-2">
        {slots.slice(6, 12).map(item => (
          <div className="col-2 p-1 m-0">
            <button
              type="button"
              className={`btn btn-${
                item.booked || selected[item.id] ? "" : "outline-"
              }${selected[item.id] ? "primary" : "danger"} `}
              id={item.id}
              key={item.id}
              onClick={item.booked ? {} : () => onClick(item.id)}
            >
              {item.time}
            </button>
          </div>
        ))}
      </div>
      <span className="m-3">{`${d3.getDate()}-${d3.getMonth() +
        1}-${d3.getFullYear()}`}</span>
      <div className="row m-2">
        {slots.slice(12, 18).map(item => (
          <div className="col-2 p-1 m-0">
            <button
              type="button"
              className={`btn btn-${
                item.booked || selected[item.id] ? "" : "outline-"
              }${selected[item.id] ? "primary" : "danger"} `}
              id={item.id}
              key={item.id}
              onClick={item.booked ? {} : () => onClick(item.id)}
            >
              {item.time}
            </button>
          </div>
        ))}
      </div>
      <div className="row mt-3">
        <div className="col-10"></div>
        <div className="col-2 text-center ">
          <button
            type="button"
            className={`btn btn-primary`}
            onClick={() => handleBook(selected)}
          >
            LOCK
          </button>
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  slots: PropTypes.array.isRequired,
  bookSlot: PropTypes.func.isRequired,
  id: PropTypes.string,
  getSlots: PropTypes.func.isRequired,
  user: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  slots: state.dash.slots,
  id: state.dash.cid,
  user: state.auth.user,
  loading: state.dash.loading
});

export default connect(
  mapStateToProps,
  { bookSlot, getSlots }
)(Grid);
