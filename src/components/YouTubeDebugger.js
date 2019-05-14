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

  handleBit = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  };

  handleResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: { resolution: "720p" }
      })
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBit} />
        <button className="resolution" onClick={this.handleResolution} />
      </div>
    );
  }
}

export default YouTubeDebugger;
