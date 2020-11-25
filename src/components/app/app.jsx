import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";

const {ROOT, LOGIN, MY_LIST, FILMS, REVIEW, PLAYER} = AppRoute;

const App = () => {

  return (
    <BrowserRouter basename={ROOT} history={browserHistory}>
      <Switch>
        <Route exact path={ROOT} render={({history}) => (
          <Main onPlayClick={(id) => history.push(`${PLAYER}/${id}`)}/>
        )} />
        <Route exact path={LOGIN}>
          <SignIn />
        </Route>
        <PrivateRoute exact path={MY_LIST} render={() => {
          return <MyList />;
        }} />
        <Route exact path={`${FILMS}/:id`} render={({history, match}) => (
          <MoviePage id={match.params.id} onPlayClick={(id) => history.push(`${PLAYER}/${id}`)}/>
        )} />
        <PrivateRoute exact path={`${FILMS}/:id${REVIEW}`} render={({match}) => {
          return <AddReview id={match.params.id} />;
        }} />
        <Route exact path={`${PLAYER}/:id`} render={({history, match}) => (
          <Player id={match.params.id} onExitClick={(id) => history.push(`${FILMS}/${id}`)} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
