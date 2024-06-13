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

export const headerMenus = [
  {
      title: "홈",
      icon: <HiHome />,
      src: "/"
  },
  {
      title: "추천 영상",
      icon: <HiOutlineThumbUp />,
      src: "/today"
  },
  {
      title: "추천 여행자",
      icon: <HiOutlineHeart />,
      src: "/traveler"
  },
  {
      title: "국내여행",
      icon: <HiOutlineLightningBolt />,
      src: "/koreatrip"
  },
  {
      title: "유럽여행",
      icon: <HiCurrencyEuro />,
      src: "/europetrip"
  },
  {
      title: "남미·북미 여행",
      icon: <HiCurrencyDollar />,
      src: "/americatrip"
  },
  {
      title: "아시아여행",
      icon: <HiCurrencyYen />,
      src: "/asiatrip"
  },
  {
      title: "아프리카여행",
      icon: <GiAfrica />,
      src: "/africatrip"
  },
];

export const searchKeyword = [
  {
      title: "휴양지",
      src: "/search/Vacation"
  },
  {
      title: "문화체험",
      src: "/search/CulturalExperiences"
  },
  {
      title: "맛집탐방",
      src: "/search/FoodTours"
  },
  {
      title: "자연경관",
      src: "/search/ScenicViews"
  },
  {
      title: "액티비티",
      src: "/search/Activities"
  },
  {
      title: "여행팁",
      src: "/search/TravelTip"
  },
  {
      title: "나혼자여행",
      src: "/search/SoloTravel"
  },
  {
      title: "와인투어",
      src: "/search/WineTours"
  },
  {
      title: "배낭여행",
      src: "/search/Backpacking"
  },
  {
      title: "페스티벌",
      src: "/search/Festival"
  },
  {
      title: "하이킹",
      src: "/search/Hiking"
  }
];

export const snsLink = [
  {
      title: "github",
      url: "https://github.com/Hwan-96",
      icon: <AiFillGithub />
  },
  {
      title: "youtube",
      url: "https://www.youtube.com",
      icon: <AiFillYoutube />
  },
  {
      title: "portfolio",
      url: "https://yunhwan2024.web.app/",
      icon: <MdWebStories />
  },
  {
      title: "instagram",
      url: "https://www.instagram.com/hwan_n__",
      icon: <AiOutlineInstagram />
  },
]