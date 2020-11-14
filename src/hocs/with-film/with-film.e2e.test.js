import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import withFilm from "./with-film";
import {MockComponent, defaultState} from "../../test-data";
import {createAPI} from "../../services/api";

const api = createAPI(() => {});
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares)(defaultState);

configure({adapter: new Adapter()});

const MockComponentWrapped = withFilm(MockComponent);


const myProvider = (props) => {
  const {children} = props;

  return (
    <Provider store={mockStore}>
      {children}
    </Provider>
  );
};

myProvider.propTypes = {
  children: PropTypes.node
};

it(`Should isLoading equal true`, () => {

  const wrapper = mount(<MockComponentWrapped />, {
    wrappingComponent: myProvider,
  });

  expect(wrapper.state().isLoading).toBe(true);
});
