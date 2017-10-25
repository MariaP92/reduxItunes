import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { Play, Stop, NextPlaylist, PlayPlaylist, StopPlaylist } from "./actions";
import './App.css';

const Song = ({ title, artist, duration, isplaying }) => {
    return (
      <li>{title} - {artist}<span className="duration">{duration}</span></li>
    );
  
}

const App = ({ songs, selectedSongIndex }) => {
  const songComponents = songs.map((song, index) => {
    return <Song
      Key={index}
      title={song.title}
      artist={song.artist}
      duration={song.duration} 
      isplaying = {song.isplaying}/>
  })
  return (
    <div>
      <h1>Treetunes</h1>
      <ol id="playlist">
        {songComponents}
      </ol>
      <button id="play" onClick={PlayPlaylist}>Play</button>
      <button id="next" onClick={NextPlaylist}>Next</button>
      <button id="stop" onClick={StopPlaylist}>Stop</button>

    </div>
  );

}

const mapToProps = ({ songs, selectedSongIndex }) => ({ songs, selectedSongIndex });

export default connect(mapToProps)(App);
