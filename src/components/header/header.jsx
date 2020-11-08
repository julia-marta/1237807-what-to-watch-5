import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Logo from "../logo/logo";
import {redirectToRoute} from "../../store/actions/user-actions/user-actions";
import {AppRoute, AuthorizationStatus} from "../../const";

const {ROOT, LOGIN, MY_LIST} = AppRoute;
const {AUTHORIZED} = AuthorizationStatus;

const Header = (props) => {

  const {isMain, isSignIn, classTitle, children, userStatus, userName, userAvatar, onAvatarClick} = props;

  return (
    <header className={`page-header ${classTitle ? `${classTitle}` : ``}`}>
      <div className="logo">
        {isMain ? <a className="logo__link">
          <Logo/>
        </a>
          : <Link to={ROOT} className="logo__link">
            <Logo/>
          </Link>}
      </div>

      {children}

      {isSignIn ? `` :
        <div className="user-block">

          {userStatus === AUTHORIZED ?
            <div className="user-block__avatar" onClick={() => onAvatarClick(MY_LIST)}>
              <img src={userAvatar} alt={userName} width="63" height="63" />
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
  classTitle: PropTypes.string,
  children: PropTypes.element,
  userStatus: PropTypes.string.isRequired,
  userName: PropTypes.oneOfType([PropTypes.string.isRequired, () => null]),
  userAvatar: PropTypes.oneOfType([PropTypes.string.isRequired, () => null]),
  onAvatarClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  userStatus: USER.status,
  userName: USER.name,
  userAvatar: USER.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  onAvatarClick(url) {
    dispatch(redirectToRoute(url));
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
