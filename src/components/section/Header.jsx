import React from 'react'
import { HiHome } from "react-icons/hi";
import { HiOutlineThumbUp } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { HiCurrencyEuro } from "react-icons/hi2";
import { HiCurrencyDollar } from "react-icons/hi2";
import { HiCurrencyYen } from "react-icons/hi2";
import { GiAfrica } from "react-icons/gi";

import { AiFillGithub } from "react-icons/ai";
import { MdWebStories } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className="header-logo">
        <a href="/">
          <em aria-hidden='true'></em>
          <span>Travel vibe</span>
        </a>
      </h1>

      <nav className="header-menu">
        <ul className='menu'>
          <li className='active'>
            <a href="/"><HiHome />홈</a>
          </li>
          <li>
            <a href="/today"><HiOutlineThumbUp />추천 영상</a>
          </li>
          <li>
            <a href="/traveler"><HiOutlineHeart />추천 여행자</a>
          </li>
          <li>
            <a href="/koreatrip"><HiOutlineLightningBolt />국내여행</a>
          </li>
          <li>
            <a href="/europetrip"><HiCurrencyEuro />유럽여행</a>
          </li>
          <li>
            <a href="/americatrip"><HiCurrencyDollar />남미·북미 여행</a>
          </li>
          <li>
            <a href="/asiatrip"><HiCurrencyYen />아시아여행</a>
          </li>
          <li>
            <a href="/africatrip"><GiAfrica />아프리카여행</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
              <a href='/search/Vacation'>휴양지</a>
          </li>
          <li>
              <a href='/search/Cultural Experiences'>문화체험</a>
          </li>
          <li>
              <a href='/search/Food Tours'>맛집탐방</a>
          </li>
          <li>
              <a href='/search/Scenic Views'>자연경관</a>
          </li>
          <li>
              <a href='/search/Activities'>액티비티</a>
          </li>
          <li>
              <a href='/search/Travel Tip'>여행팁</a>
          </li>
          <li>
              <a href='/search/Solo Travel'>나혼자여행</a>
          </li>
          <li>
              <a href='/search/Wine Tours'>와인투어</a>
          </li>
          <li>
              <a href='/search/Backpacking'>배낭여행</a>
          </li>
          <li>
              <a href='/search/Festival'>페스티벌</a>
          </li>
          <li>
              <a href='/search/Hiking'>하이킹</a>
          </li>
      </ul>
      </nav>

      <ul className="header-sns">
        <li>
            <a href='https://github.com/Hwan-96' rel='noopener noreferrer' target='_blank'>
                <AiFillGithub />
            </a>
        </li>
        <li>
            <a href='https://www.youtube.com' rel='noopener noreferrer' target='_blank'>
                <AiFillYoutube />
            </a>
        </li>
        <li>
            <a href='https://yunhwan2024.web.app/' rel='noopener noreferrer' target='_blank'>
              <MdWebStories />
            </a>
        </li>
        <li>
            <a href='https://www.instagram.com/hwan_n__' rel='noopener noreferrer' target='_blank'>
                <AiOutlineInstagram />
            </a>
        </li>
      </ul>

    </header>
  )
}

export default Header