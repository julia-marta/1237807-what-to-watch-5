import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {filmCard} from "../../test-data";

const {previewImage, previewVideoLink} = filmCard;

it(`should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create((
      <VideoPlayer trailer={previewVideoLink} preview={previewImage} />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
