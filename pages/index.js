import { Link } from './utils'
export default function Home() {
  return (
    <div>
      <h1>보드 게임 스터디</h1>
      <ul>
        <li>
          <Link to="/kimkyeseung">김계승</Link>
        </li>
        <li>
          <Link to="/dogseen">김기현</Link>
        </li>
        <li>
          <Link to="/actcrazy">자손킴</Link>
        </li>
        <li>
          <Link to="/azanghs">장형석</Link>
        </li>
        <li>
          <Link to="/ycfana">윤충환</Link>
        </li>
        <li>
          <Link to="/icemonk1202">김찬중</Link>
        </li>
        <li>
          <Link to="/4221jiwon">황지원</Link>
        </li>
      </ul>
      <small>이렇게 밖에 못 만들어서 미안합니다.ㅠㅠ 나중에 스타일을 개선하도록 할게요!</small>
    </div>
  )
}
