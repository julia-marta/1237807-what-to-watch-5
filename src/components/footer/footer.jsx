import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Logo from "../logo/logo";
import {AppRoute} from "../../const";

const {ROOT} = AppRoute;

const Footer = (props) => {

  const {isMain} = props;

  return (
    <footer className="page-footer">
      <div className="logo">
        {isMain ? <a className="logo__link logo__link--light">
          <Logo/>
        </a>
          : <Link to={ROOT} className="logo__link logo__link--light">
            <Logo/>
          </Link>}
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isMain: PropTypes.bool,
};

export default Footer;
