import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const FILM = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: new Date(2014, 0, 1)
};

ReactDOM.render(
    <App film={FILM}/>,
    document.querySelector(`#root`)
);
