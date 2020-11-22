import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import Grid from "./Grid";
import BookItem from "../booking/BookItem";

const AdminDash = ({ user, bookings, bookLoaded }) => {
  return (
    <div>
      <div>
        <Grid></Grid>
      </div>
      <br></br>
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>
              <i className="fas fa-motorcycle"></i>
              {` ${user.cdetails.cname}`}
            </h3>
            <p>
              <i className="fas fa-user"></i>
              {` ${user.name}`}
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              {` ${user.email}`}
            </p>
            <p>
              <i className="fas fa-phone-alt"></i>
              {` ${user.phone}`}
            </p>

            <p>
              <i className="fas fa-compass"></i>
              {` ${user.cdetails.location.area}, ${user.cdetails.location.city}, ${user.cdetails.location.pincode}`}
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <h2>Bookings</h2>
      <div>
        {bookings.map(book => (
          <BookItem key={book.slot} book={book} />
        ))}
      </div>
    </div>
  );
};

AdminDash.propTypes = {
  user: PropTypes.object,
  bookings: PropTypes.array,
  bookLoaded: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.auth.user,
  bookings: state.dash.bookings,
  bookLoaded: state.dash.bookLoaded
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(AdminDash);
