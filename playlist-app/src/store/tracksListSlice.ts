import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface Track {
    id: string,
    name: string,
    album: string,
    artist: string,
}

interface TracksState {
    tracks: Track[];
}

const initialState: TracksState = {
    tracks: []
}

const TracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        addTrack: (state,action: PayloadAction<Track>) => {
            state.tracks.push(action.payload)
        }
    }
})

export default TracksSlice.reducer;
export const trackActions = TracksSlice.actions;