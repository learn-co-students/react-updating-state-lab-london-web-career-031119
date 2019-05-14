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

  handleBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, { bitrate: 12 })
    });
  };

  handleRes = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: { resolution: "720p" }
      })
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleBitrate} className="bitrate">
          {this.state.settings.bitrate}
        </button>
        <button onClick={this.handleRes} className="resolution">
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
