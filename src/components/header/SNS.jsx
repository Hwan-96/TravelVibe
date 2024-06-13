import React from 'react'
import { Link } from 'react-router-dom'
import { snsLink } from '../../data/header'

const SNS = () => {

  return (
    <ul className="header-sns">
      {snsLink.map((sns, key)=>(
        <li key={key}>
          <Link to={sns.url} target='_blank' rel='noopener noreferrer' aria-label={sns.title} >
            {sns.icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SNS