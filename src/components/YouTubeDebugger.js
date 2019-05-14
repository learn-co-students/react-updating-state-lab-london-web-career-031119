import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  toggleBitrate = () => {
    this.setState({settings: {
      ...this.state.settings,
      bitrate: 12
    }})
  }

  toggleResolution = () => {
    this.setState({settings: {
      ...this.state.settings, video: {
        ...this.state.settings.video, resolution: '720p'
      }}})
  }

  render() { 
    return (
      <React.Fragment>
        <button className="bitrate" onClick={ this.toggleBitrate }>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={ this.toggleResolution }>{this.state.settings.video.resolution}</button>
      </React.Fragment>
    )
  }
}
 
export default YouTubeDebugger