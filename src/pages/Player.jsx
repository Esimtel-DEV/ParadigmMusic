import React, { useState } from "react";
import PlayerControls from "../components/PlayerControls";
import Playlist from "../components/Playlist";
import TrackInfo from "../components/TrackInfo";
import VolumeControl from "../components/VolumeControl";
import cover1 from "../assets/images/cover1.webp";
import logo from "../assets/images/pentagram_logo.png";


function Player() {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Night Terror",
    artist: "Dream Theater",
    genre: "Progressive Metal",
    plays: "3.462.412",
    cover: cover1,
  });

  return (
    <div className="container text-center">
      <button className="logo-btn">
      <img src={logo} alt="App Logo" className="logo-img" />
    </button>
      <div className="track-info">
        <TrackInfo track={currentTrack} />
      </div>
      <PlayerControls />
      <VolumeControl />
      <Playlist setCurrentTrack={setCurrentTrack} />
    </div>
  );
}

export default Player;
