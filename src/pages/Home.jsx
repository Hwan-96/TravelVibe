import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Traveler from '../components/contents/Traveler'
import Koreatrip from '../components/contents/Koreatrip'
import Europetrip from '../components/contents/Europetrip'
import Americatrip from '../components/contents/Americatrip'
import Asiatrip from '../components/contents/Asiatrip'
import Africatrip from '../components/contents/Africatrip'

const Home = () => {
  return (
    <Main title="" description="TravelVibe에 오신것을 환영합니다!">
      <Today/>
      <Traveler/>
      <Koreatrip/>
      <Europetrip/>
      <Americatrip/>
      <Asiatrip/>
      <Africatrip/>
    </Main>
  )
}

export default Home