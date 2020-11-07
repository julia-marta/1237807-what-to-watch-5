import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const {ROOT, LOGIN} = AppRoute;

const Header = (props) => {

  const {isMain, isSignIn, classTitle, isAuthorized, onAvatarClick, children} = props;

  return (
    <header className={`page-header ${classTitle ? `${classTitle}` : ``}`}>
      <div className="logo">
        {isMain ? <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
          : <Link to={ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>}
      </div>

      {children}

      {isSignIn ? `` :
        <div className="user-block">

          {isAuthorized ?
            <div className="user-block__avatar" onClick={onAvatarClick}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>

            : <Link to={LOGIN} className="user-block__link">Sign in</Link>}
        </div>
      }

    </header>
  );
};

Header.propTypes = {
  isMain: PropTypes.bool,
  isSignIn: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  classTitle: PropTypes.string,
  onAvatarClick: PropTypes.func,
  children: PropTypes.element,
};

export default Header;
