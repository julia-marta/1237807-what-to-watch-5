import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import withVideo from "../../hocs/with-video/with-video";
import FilmTypes from "../../types/types";

const VideoPlayer = withVideo(Player);

const App = (props) => {
  const {films, filmHeader} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <Main filmHeader={filmHeader} onPlayClick={(id) => history.push(`/player/` + id)}/>
        )} />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>
        <Route exact path="/films/:id" render={({history}) => (
          <MoviePage onPlayClick={(id) => history.push(`/player/` + id)}/>
        )} />
        <Route exact path="/films/:id/review" render={({history}) => (
          <AddReview film={filmHeader} onAvatarClick={() => history.push(`/mylist`)} />
        )} />
        <Route exact path="/player/:id" render={({history}) => (
          <VideoPlayer onExitClick={(id) => history.push(`/films/` + id)} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: FilmTypes.list.isRequired,
  filmHeader: FilmTypes.header.isRequired,
};

export default App;
