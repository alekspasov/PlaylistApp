
import { Box } from '@chakra-ui/react'
import './App.css'
import TrackCard from './components/TrackCard/TrackCard'
import SearchBar from './components/SearchBar/SearchBar'
import TrackList from './components/TrackList/TrackList'
import PlayList from './components/PlayList/PlayList'

const trackList =  [{
  id: '1',
  name: 'Test Song name',
  artist: 'Test artist',
  album : 'Test artist'
}]

function App() {


  return (
    <Box>
    
    <SearchBar />
    <div className="trackLists">
    <TrackList tracks = {trackList}/>
    <TrackList tracks = {trackList} />
    </div>
    </Box>
  )
}

export default App
