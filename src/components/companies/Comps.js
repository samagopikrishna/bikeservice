import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import CompItem from "./CompItem";
import { getComp } from "../../actions/dash";
import { Link, Redirect } from "react-router-dom";

class Comps extends Component {
  componentDidMount() {
    this.props.getComp();
  }

  render() {
    if (this.props.slotsLoaded) {
      return <Redirect to="/userdash" />;
    }
    var { comps, loading, slotsLoaded } = this.props;
    let compItems;

    if (comps === null || loading) {
      compItems = <Spinner />;
    } else {
      if (comps.length > 0) {
        compItems = comps.map(comp => <CompItem key={comp._id} comp={comp} />);
      } else {
        compItems = <h4>No Service Centers found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Service Centers</h1>
              <p className="lead text-center">Book your slot</p>
              {compItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Comps.propTypes = {
  getComp: PropTypes.func.isRequired,
  comps: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  slotsLoaded: PropTypes.bool
};

const mapStateToProps = state => ({
  comps: state.dash.comps,
  loading: state.auth.loading,
  slotsLoaded: state.dash.slotsLoaded
});

export default connect(
  mapStateToProps,
  { getComp }
)(Comps);
