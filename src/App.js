import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Traveler from './pages/Traveler'
import Koreatrip from './pages/Koreatrip'
import Europetrip from './pages/Europetrip'
import Americatrip from './pages/Americatrip'
import Asiatrip from './pages/Asiatrip'
import Afreecatrip from './pages/Afreecatrip'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/today' element={<Today/>} />
        <Route path='/traveler' element={<Traveler/>} />
        <Route path='/koreatrip' element={<Koreatrip/>} />
        <Route path='/europetrip' element={<Europetrip/>} />
        <Route path='/americatrip' element={<Americatrip/>} />
        <Route path='/asiatrip' element={<Asiatrip/>} />
        <Route path='/afreecatrip' element={<Afreecatrip/>} />
        <Route path='/channel/:channelID' element={<Channel/>} />
        <Route path='/video/:videoID' element={<Video/>} />
        <Route path='/search/:searchID' element={<Search/>} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App