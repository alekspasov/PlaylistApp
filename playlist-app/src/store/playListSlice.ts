import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Track } from "./tracksListSlice";

interface PlayListState {
    playlistTracks: Track[];
}

const initialState: PlayListState = {
    playlistTracks: []
}

const PlayListSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        removeTrackFromPlaylist: (state,action: PayloadAction<string>) => {
            state.playlistTracks = state.playlistTracks.filter(track => track.id !== action.payload)
        }
    }
})

export const playlistActions = PlayListSlice.actions;

export default PlayListSlice.reducer;
