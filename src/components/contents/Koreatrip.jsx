import React from 'react'
import { koreaTripText } from '../../data/koreatrip'
import { Link } from 'react-router-dom'

const Koreatrip = () => {
  return (
    <section id='koreaTrip'>
      <h2>국내 여행</h2>
      <div className="video-inner">
        {koreaTripText.map((video, key)=>(
          <div className="video" key={key}>
            <div className="video-thumb play-icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Koreatrip