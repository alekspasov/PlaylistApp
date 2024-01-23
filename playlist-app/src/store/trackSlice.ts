import { createSlice } from "@reduxjs/toolkit"

export interface Track {
    id: string,
    name: string,
    album: string,
    artist: string,
}

const initialState: Track = {
    id: '1',
    name: 'test song',
    album: 'test album',
    artist: 'test artist'
}

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {

    }
})

export default trackSlice.reducer;