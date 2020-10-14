import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {trailer, preview} = this.props;
    const video = this._videoRef.current;
    video.src = trailer;
    video.poster = preview;
    video.width = 280;
    video.height = 175;

    video.oncanplaythrough = () => {
      setTimeout(() => video.play(), 1000);
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.oncanplaythrough = null;
  }

  render() {

    return (
      <video ref={this._videoRef} muted />
    );
  }
}

VideoPlayer.propTypes = {
  trailer: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};
