import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import FilmTypes from "../../types/types";

const App = (props) => {
  const {films, genres, filmHeader, filmFull} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <Main films={films} genres={genres} filmHeader={filmHeader} onPlayClick={(id) => history.push(`/player/` + id)}/>
        )} />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>
        <Route exact path="/films/:id" render={({history}) => (
          <MoviePage films={films} film={filmFull} onPlayClick={(id) => history.push(`/player/` + id)}/>
        )} />
        <Route exact path="/films/:id/review" render={({history}) => (
          <AddReview film={filmHeader} onAvatarClick={() => history.push(`/mylist`)} />
        )} />
        <Route exact path="/player/:id" render={({history}) => (
          <Player onExitClick={() => history.push(`/`)} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: FilmTypes.list.isRequired,
  genres: FilmTypes.genres.isRequired,
  filmHeader: FilmTypes.header.isRequired,
  filmFull: FilmTypes.page.isRequired,
};

export default App;
