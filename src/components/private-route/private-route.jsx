import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../const";

const {AUTHORIZED} = AuthorizationStatus;
const {LOGIN} = AppRoute;

const PrivateRoute = (props) => {
  const {render, exact, path, status} = props;

  return (
    <Route exact={exact} path={path} render={(routeProps) => {

      return (
        status === AUTHORIZED
          ? render(routeProps)
          : <Redirect to={LOGIN} />
      );
    }}
    />
  );
};

PrivateRoute.propTypes = {
  status: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  status: USER.status,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
