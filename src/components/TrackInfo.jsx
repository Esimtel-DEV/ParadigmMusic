import React from "react";

function TrackInfo({ track }) {
  return (
    <div className="track-info-container">
      <div className="track-cover-wrapper">
        <img src={track.cover} alt="Cover" className="track-cover" />
      </div>
      <div className="track-details">
        <h3 className="track-title">
          {track.title}
        </h3>
        <h5 className="track-artist">
          {track.artist}
        </h5>
        <p className="track-meta">
          Genre: {track.genre} | Listens: {track.plays}
        </p>
      </div>
    </div>
  );
}

export default TrackInfo;
