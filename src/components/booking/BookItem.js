import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { selComp } from "../../actions/dash";

const BookItem = ({ book }) => {
  var d1 = "7 - 11- 2019";
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-lg-6 col-md-4 col-8">
          <h5>CUSTOMER</h5>
          <p>
            <i className="fas fa-user"></i>
            {`  ${book.name}`}
          </p>
          <p>
            <i className="fas fa-phone-alt"></i>
            {`  ${book.phone}`}
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            {` ${book.email}`}
          </p>
        </div>
      </div>
      <div className="col-md-4 d-none d-md-block">
        <p>{`SLOT`}</p>
        <span>
          <i class="far fa-clock"></i>
          {` ${book.time}    `}
        </span>
        <span>
          {`  `}
          <i class="fas fa-calendar-day"></i>
          {` ${d1}`}
        </span>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  selComp: PropTypes.func.isRequired,
  comp: PropTypes.bool,
  book: PropTypes.object
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { selComp }
)(BookItem);
