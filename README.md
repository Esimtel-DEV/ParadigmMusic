********** ParadigmMusic - Music Player App **********

A modern interface music player developed in React, allowing you to play and manage playlists.


1.-Description
This application is a music player that displays track information, playback controls, volume adjustment, and song selection from a playlist.

**** Components ****

--- Player (Main Component) ---

The main component that integrates all other player components. It maintains the current track state and passes it to child components.
Features:

- Displays the application logo
- Contains and organizes track information, controls, volume, and playlist components
- Manages the current track state

--- TrackInfo ---

Displays detailed information about the track currently playing.
Features:

- Shows album cover
- Displays song title
- Shows artist name
- Indicates music genre
- Displays play count

--- PlayerControls ---
Provides controls for music playback.
Features:

- Play/Pause
- Skip to next track
- Go back to previous track

--- VolumeControl ---

Allows the user to adjust playback volume.
Features:

- Slider control to adjust volume

--- Playlist ---
Displays available songs and allows selection for playback.
Features:

- List of available songs
- Track selection for playback
- Updates current track state in the Player component
- Like/favorite button for each song

2.- Installation

Clone the repository git clone https://github.com/Esimtel-DEV/ParadigmMusic.git

--- Navigate to project directory ---

cd ParadigmMusic

--- Install dependencies ---

npm install

--- Start the application in development mode ---

npm start

--- Technologies Used---

Vite.js

React.js

Css

