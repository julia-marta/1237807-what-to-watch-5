import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import withVideo from "../../hocs/with-video/with-video";
import {AppRoute} from "../../const";

const {ROOT, LOGIN, MY_LIST, FILMS, REVIEW, PLAYER} = AppRoute;

const VideoPlayer = withVideo(Player);

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROOT} render={({history}) => (
          <Main onPlayClick={(id) => history.push(`${PLAYER}/${id}`)}/>
        )} />
        <Route exact path={LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={MY_LIST}>
          <MyList />
        </Route>
        <Route exact path={`${FILMS}/:id`} render={({history, match}) => (
          <MoviePage id={match.params.id} onPlayClick={(id) => history.push(`${PLAYER}/${id}`)}/>
        )} />
        <Route exact path={`${FILMS}/:id${REVIEW}`} render={({history, match}) => (
          <AddReview id={match.params.id} onAvatarClick={() => history.push(MY_LIST)} />
        )} />
        <Route exact path={`${PLAYER}/:id`} render={({history, match}) => (
          <VideoPlayer id={match.params.id} onExitClick={(id) => history.push(`${FILMS}/${id}`)} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
