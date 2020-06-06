import React from 'react'
import { Link } from '../lib/utils'

export default function Home() {
  return (
    <div>
      <h1>보드 게임 스터디</h1>
      <ul>
        <li>
          <Link to="/kimkyeseung">김계승</Link>
        </li>
        <li>
          <Link to="/actcrazy">자손킴</Link>
        </li>
        <li>
          <Link to="/azanghs">장형석</Link>
        </li>
        <li>
          <Link to="/icemonk1202">김찬중</Link>
        </li>
        <li>
          <Link to="/icemonk1202">김희석</Link>
        </li>
        <li>
          <Link to="/zxcasd">안승엽</Link>
        </li>
      </ul>
    </div>
  )
}
