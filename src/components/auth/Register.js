import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large"></h1>
          <p className="lead"></p>
          <div className="buttons">
            <Link to="/registeruser" className="btn btn-primary ">
              Sign Up as User
            </Link>
            <Link to="/registeradmin" className="btn btn-primary">
              Sign Up as Admin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
