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
        addTrack: (state,action: PayloadAction<{track:Track}>) => {
            state.tracks.push({
                id: action.payload.id,
                name: action.payload.name,
                album: action.payload.album,
                artist: action.payload.artist

            })
        }
    }
})

export default TracksSlice.reducer;
export const {addTrack} = TracksSlice.actions;