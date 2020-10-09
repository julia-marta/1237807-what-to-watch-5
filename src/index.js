import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import genres from "./mocks/genres";

ReactDOM.render(
    <App films={films} genres={genres} filmHeader={films[0]} filmFull={films[0]} />,
    document.querySelector(`#root`)
);
