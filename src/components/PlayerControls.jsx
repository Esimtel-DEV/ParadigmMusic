import React, { useState } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaRandom, FaHeart  } from "react-icons/fa";

function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-3">
      <button className="btn btn-outline-primary"><FaStepBackward /></button>
      <button className="btn btn-outline-primary" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button className="btn btn-outline-primary"><FaStepForward /></button>
      <button className="btn btn-outline-primary"><FaRandom /></button>
      <button className={`btn ${liked ? "btn-danger" : "btn-outline-primary"}`} onClick={() => setLiked(!liked)}>
        <FaHeart />
      </button>
    </div>
  );
}

export default PlayerControls;
