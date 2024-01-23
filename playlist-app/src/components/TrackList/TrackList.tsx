import TrackCard from "../TrackCard/TrackCard"
import './TrackList.css'


const TrackList = ({tracks}) => {

    return (
        tracks.map(track=>(
            <TrackCard key={track.id} track={track} />
        ))
    )
    
}

export default TrackList; 