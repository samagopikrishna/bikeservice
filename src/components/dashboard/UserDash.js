import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { selComp } from "../../actions/dash";
import Grid from "./Grid";
import { Link, Redirect } from "react-router-dom";

const UserDash = ({ comp, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <a href="/loadcomps">
        <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
      </a>
      <br></br>
      <br></br>
      <div>
        <Grid></Grid>
      </div>
      <br></br>
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>
              <i className="fas fa-motorcycle"></i>
              {` ${comp.cdetails.cname}`}
            </h3>
            <p>
              <i className="fas fa-user"></i>
              {` ${comp.name}`}
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              {` ${comp.email}`}
            </p>
            <p>
              <i className="fas fa-phone-alt"></i>
              {` ${comp.phone}`}
            </p>

            <p>
              <i className="fas fa-compass"></i>
              {` ${comp.cdetails.location.area}, ${comp.cdetails.location.city}, ${comp.cdetails.location.pincode}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

UserDash.propTypes = {
  comp: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  comp: state.dash.comp,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { selComp }
)(UserDash);
