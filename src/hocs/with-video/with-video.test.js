import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import withVideo from "./with-video";
import {filmCard} from "../../test-data";

const MockComponent = (props) => {
  const {children, renderPlayer} = props;

  return (
    <React.Fragment>
      {renderPlayer(filmCard.previewVideoLink)}
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

it(`should withVideo HOC render correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
