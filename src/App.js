import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Traveler from './pages/Traveler'
import Koreatrip from './pages/Koreatrip'
import Europetrip from './pages/Europetrip'
import Americatrip from './pages/Americatrip'
import Asiatrip from './pages/Asiatrip'
import Africatrip from './pages/Africatrip'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import ErrorPage from './pages/ErrorPage'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/today' element={<Today/>} />
          <Route path='/traveler' element={<Traveler/>} />
          <Route path='/koreatrip' element={<Koreatrip/>} />
          <Route path='/europetrip' element={<Europetrip/>} />
          <Route path='/americatrip' element={<Americatrip/>} />
          <Route path='/asiatrip' element={<Asiatrip/>} />
          <Route path='/africatrip' element={<Africatrip/>} />
          <Route path='/channel/:channelID' element={<Channel/>} />
          <Route path='/video/:videoID' element={<Video/>} />
          <Route path='/search/:searchID' element={<Search/>} />
          <Route path='/*' element={<ErrorPage/>} />
        </Routes>
      </Main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App