import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import swal from 'sweetalert';
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/actions/user-actions/user-actions";
import {fetchFilms, fetchPromoFilm, checkAuthorization} from "./store/actions/api-actions/api-actions";
import {adapter} from "./store/middlewares/adapter";
import {redirect} from "./store/middlewares/redirect";
import {createAPI} from "./services/api";
import {AuthorizationStatus} from "./const";

const {NOT_AUTHORIZED} = AuthorizationStatus;

const onUnauthorized = () => {
  store.dispatch(requireAuthorization(NOT_AUTHORIZED));
};

const api = createAPI(onUnauthorized);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(adapter),
    applyMiddleware(redirect)
));

Promise.all([
  store.dispatch(fetchFilms()),
  store.dispatch(fetchPromoFilm()),
  store.dispatch(checkAuthorization()),
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
