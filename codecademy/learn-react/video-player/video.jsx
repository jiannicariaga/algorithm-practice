import React from 'react';

export class Video extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <div>
        <video
          controls
          autoPlay
          muted
          src={src} />
      </div>
    );
  }
}
