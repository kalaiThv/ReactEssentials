import HeaderImg from '../../assets/kalai.png';
import './Header.css';
export default function Header() {
  return (
    <header>
      <img src={HeaderImg} alt="" />
      <h1>ROCK PAPER SCISSOR</h1>
      <p>
          Choose one of the three choices - and see if you can beat the computer.
      </p>
    </header>
  );
}