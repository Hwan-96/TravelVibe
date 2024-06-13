import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(()=> import('./pages/Home'));
const Today = lazy(()=> import('./pages/Today'));
const Traveler = lazy(()=> import('./pages/Traveler'));
const Koreatrip = lazy(()=> import('./pages/Koreatrip'));
const Europetrip = lazy(()=> import('./pages/Europetrip'));
const Americatrip = lazy(()=> import('./pages/Americatrip'));
const Asiatrip = lazy(()=> import('./pages/Asiatrip'));
const Africatrip = lazy(()=> import('./pages/Africatrip'));
const Channel = lazy(()=> import('./pages/Channel'));
const Video = lazy(()=> import('./pages/Video'));
const Search = lazy(()=> import('./pages/Search'));
const ErrorPage = lazy(()=> import('./pages/ErrorPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main/>}>
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App