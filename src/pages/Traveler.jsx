import React from 'react'
import Main from '../components/section/Main'
import {travelerText} from '../data/traveler'
import { Link } from 'react-router-dom'

const Traveler = () => {
  return (
    <Main
      title="추천 여행자"
      description="오늘의 추천 여행자입니다.">

        <section id='travelerPage'>
          <h2>추천 여행자</h2>
          <div className='traveler-inner'>
            {travelerText.map((traveler, key) => (
              <div className="traveler" key={key}>
                <div className="traveler-img play-icon">
                  <Link to={`/channel/${traveler.channelId}`}>
                    <img src={traveler.img} alt={traveler.name} />
                  </Link>
                </div>
                <div className="traveler-info">
                  <Link to={`/channel/${traveler.channelId}`}>
                    {traveler.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

    </Main>
  )
}

export default Traveler