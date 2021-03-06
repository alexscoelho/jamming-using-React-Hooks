import React from  'react';
import './Playlist.css'
import {TrackList} from '../TrackList/TrackList'

export const Playlist = ({playlistName, playlistTracks, onRemove, onNameChange, onSave}) => {
    const handleNameChange = (event) => {
        onNameChange(event.target.value)
    }


    return (
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValue={playlistName}/>
            <TrackList isRemoval={true} onRemove={onRemove} tracks={playlistTracks}/>
            <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}