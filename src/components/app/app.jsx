import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import withFilm from "../../hocs/with-film/with-film";
import withReviews from "../../hocs/with-reviews/with-reviews";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";

const {ROOT, LOGIN, MY_LIST, FILMS, REVIEW, PLAYER} = AppRoute;

const MoviePageWrapped = withReviews(MoviePage);
const PlayerWrapped = withFilm(Player);

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
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
          <MoviePageWrapped id={match.params.id} onPlayClick={(id) => history.push(`${PLAYER}/${id}`)}/>
        )} />
        <PrivateRoute exact path={`${FILMS}/:id${REVIEW}`} render={({match}) => {
          return <AddReview id={match.params.id} />;
        }} />
        <Route exact path={`${PLAYER}/:id`} render={({history, match}) => (
          <PlayerWrapped id={match.params.id} onExitClick={(id) => history.push(`${FILMS}/${id}`)} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
