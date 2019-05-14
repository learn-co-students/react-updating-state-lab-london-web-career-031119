// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  handleClickBit = () => {
    this.setState({
      settings: { ...this.state.settings, bitrate: 12 }
    });
  };

  handleClickRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBit}>
          bitrate
        </button>
        <button className="resolution" onClick={this.handleClickRes}>
          resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
