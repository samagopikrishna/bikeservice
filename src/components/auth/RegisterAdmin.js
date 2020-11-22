import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { registerAdmin } from "../../actions/auth";

const RegisterAdmin = ({
  registerAdmin,
  setAlert,
  isAuthenticated,
  slotsLoaded
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cname: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    password2: ""
  });

  const {
    street,
    area,
    city,
    state,
    pincode,
    cname,
    name,
    email,
    phone,
    password,
    password2
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger", 5000);
    } else {
      await registerAdmin({
        street,
        area,
        city,
        state,
        pincode,
        cname,
        name,
        email,
        phone,
        password
      });
    }
  };

  //redirect if logged in
  if (slotsLoaded) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company Name"
            name="cname"
            value={cname}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <h1>Location</h1>

        <div className="form-group">
          <input
            type="text"
            placeholder="Street"
            name="street"
            value={street}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Area"
            name="area"
            value={area}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="State"
            name="state"
            value={state}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={pincode}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account?
        <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

RegisterAdmin.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerAdmin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  slotsLoaded: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  slotsLoaded: state.dash.slotsLoaded
});

export default connect(
  mapStateToProps,
  { setAlert, registerAdmin }
)(RegisterAdmin);
