import TrackCard from "../TrackCard/TrackCard"


const TrackList = ({tracks}) => {

    return (
        tracks.map(track=>(
            <TrackCard key={track.id} track={track} />
        ))
    )
    
}

export default TrackList;