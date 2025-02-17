import React, { useState } from "react";

function VolumeControl() {
  const [volume, setVolume] = useState(50);

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <label className="me-2">🔊</label>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={volume} 
        onChange={(e) => setVolume(e.target.value)}
        className="form-range w-50"
      />
      <span className="ms-2">{volume}%</span>
    </div>
  );
}

export default VolumeControl;
