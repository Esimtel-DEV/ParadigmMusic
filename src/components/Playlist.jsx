import React, { useState } from "react";
import { FaHeart, FaEllipsisV } from "react-icons/fa";
import cover1 from "../assets/images/cover1.webp";
import cover2 from "../assets/images/cover2.webp";
import cover3 from "../assets/images/cover3.webp";
import cover4 from "../assets/images/cover4.webp";
import cover5 from "../assets/images/cover5.webp";
import cover6 from "../assets/images/cover6.webp";

function Playlist({ setCurrentTrack }) {
  const [likedSongs, setLikedSongs] = useState({});

  const songs = [
    {
      id: 1,
      title: "Night Terror",
      artist: "Dream Theater",
      genre: "Progressive Metal",
      plays: "3.462.412",
      cover: cover1
    },
    {
      id: 2,
      title: "Nightmare",
      artist: "Avenged Sevenfold",
      genre: "Hard Rock",
      plays: "4.896.433",
      cover: cover2
    },
    {
      id: 3,
      title: "Windowpain",
      artist: "Opeth",
      genre: "Progressive Metal",
      plays: "6.354.676",
      cover: cover3
    },
    {
      id: 4,
      title: "Blackest Eyes",
      artist: "Porcupine Tree",
      genre: "Progressive Rock",
      plays: "3.544.790",
      cover: cover4
    },
    {
      id: 5,
      title: "What I've Done",
      artist: "Linkin Park",
      genre: "Nu Metal",
      plays: "8.975.234",
      cover: cover5
    },
    {
      id: 6,
      title: "My Curse",
      artist: "Killswitch Engage",
      genre: "Metal",
      plays: "3.799.251",
      cover: cover6
    }
  ];

  const toggleLike = id => {
    setLikedSongs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="playlist mt-3">
      <h4>Playlist</h4>
      <ul className="list-group">
        {songs.map(song =>
          <li key={song.id} className="list-group-item">
            <div
              className="song-container"
              onClick={() => setCurrentTrack(song)}
              style={{ cursor: "pointer" }}
            >
              <div className="song-cover-wrapper">
                <img
                  src={song.cover}
                  alt={`Cover de ${song.title}`}
                  className="song-cover"
                />
              </div>
              <div className="song-info">
                <div className="song-title">
                  {song.title}
                </div>
                <div className="song-artist">
                  {song.artist}
                </div>
              </div>
            </div>
            <button
              className="like-button btn"
              onClick={e => {
                e.stopPropagation();
                toggleLike(song.id);
              }}
            >
              <FaHeart color={likedSongs[song.id] ? "red" : "gray"} />
            </button>
            <button className="dots-button btn">
              <FaEllipsisV color="gray" />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Playlist;
