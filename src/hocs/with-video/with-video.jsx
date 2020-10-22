import React, {PureComponent, createRef} from "react";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
        isPlaying: false,
        duration: 0,
        progress: 0,
      };

      this._handlePlayButton = this._handlePlayButton.bind(this);
      this._handleFullScreenButton = this._handleFullScreenButton.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.oncanplay = () => {
        this.setState({
          isLoading: false,
          duration: Math.floor(video.duration),
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(video.currentTime),
        });
      };
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.oncanplay = null;
      video.ontimeupdate = null;
    }

    _handlePlayButton() {
      this.setState({
        isPlaying: !this.state.isPlaying,
      });
    }

    _handleFullScreenButton() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    render() {
      const {isPlaying, duration, progress} = this.state;

      return (
        <Component {...this.props} isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlayButtonClick={this._handlePlayButton}
          onFullScreenButtonClick={this._handleFullScreenButton}
          renderPlayer={(film) => {
            return (
              <video ref={this._videoRef} src={film} className="player__video" poster="../img/player-poster.jpg"></video>
            );
          }} />
      );
    }
  }

  WithVideo.propTypes = {

  };

  return WithVideo;
};

export default withVideo;
