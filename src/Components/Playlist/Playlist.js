import React from  'react';
import './Playlist.css'
import {TrackList} from '../TrackList/TrackList'

export const Playlist = ({playlistName, playlistTracks}) => {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <TrackList tracks={playlistTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}