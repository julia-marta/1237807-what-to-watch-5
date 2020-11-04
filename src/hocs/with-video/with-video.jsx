import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {createAPI} from "../../services/api";
import {adaptFilmToClient} from "../../utils";
import {APIRoute} from "../../const";

const api = createAPI(() => {});

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        film: {},
        isLoading: true,
        isPlaying: false,
        duration: 0,
        progress: 0,
      };

      this._handlePlayButton = this._handlePlayButton.bind(this);
      this._handleFullScreenButton = this._handleFullScreenButton.bind(this);
    }

    componentDidMount() {
      const {id} = this.props;

      api.get(`${APIRoute.FILMS}/${id}`)
      .then(({data}) => this.setState({film: adaptFilmToClient(data)}))
      .catch((error) => {
        throw error;
      });

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

    componentDidUpdate(prevProps) {
      const prevId = prevProps.id;
      const {id} = this.props;

      if (id !== prevId) {
        api.get(`${APIRoute.FILMS}/${id}`)
      .then(({data}) => this.setState({film: adaptFilmToClient(data)}))
      .catch((error) => {
        throw error;
      });
      }

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
      const {film, isPlaying, duration, progress} = this.state;

      return (
        <Component {...this.props} film={film}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlayButtonClick={this._handlePlayButton}
          onFullScreenButtonClick={this._handleFullScreenButton}
          renderPlayer={(video) => {
            return (
              <video ref={this._videoRef} src={video} className="player__video" poster="../img/player-poster.jpg"></video>
            );
          }} />
      );
    }
  }

  WithVideo.propTypes = {
    id: PropTypes.string.isRequired,

  };

  return WithVideo;
};

export default withVideo;
