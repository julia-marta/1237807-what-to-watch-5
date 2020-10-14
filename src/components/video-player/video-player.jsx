import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {trailer, preview} = props;

  return (
    <video src={trailer} poster={preview} width={280} height={175} autoPlay muted />
  );
};

VideoPlayer.propTypes = {
  trailer: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default VideoPlayer;
