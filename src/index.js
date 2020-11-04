import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import swal from 'sweetalert';
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {fetchFilms, fetchPromoFilm} from "./store/api-actions";
import {adapter} from "./store/middlewares/adapter";
import {createAPI} from "./services/api";

const api = createAPI(() => {});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(adapter)
));

Promise.all([
  store.dispatch(fetchFilms()),
  store.dispatch(fetchPromoFilm()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
})
.catch(() => {
  swal(`Error`, `Something went wrong!`, `error`);
});
