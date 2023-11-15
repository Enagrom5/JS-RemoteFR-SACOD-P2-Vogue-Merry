import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import chaudron from "../assets/chaudron.png";
import potion from "../assets/potion.svg";
import trophy from "../assets/trophy.svg";
import PlayingMusic from "./Music";

function NavBar() {
  return (
    <nav>
      <NavLink to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/">
        <div className="head">
          <img id="logo" src={logo} alt="logo" />
          <div className="title">
            <h1>Elixir Maker</h1>
            <p>TEST YOUR KNOWLEDGE</p>
          </div>
        </div>
      </NavLink>
      <ul className="leaderboard">
        <li>
          <NavLink to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/difficulty">
            <button id="playButton" type="button">
              <img id="potion" src={chaudron} alt="chaudron" />
              <h1>Play</h1>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/elixir">
            <button id="potionButton" type="button">
              <img id="potion" src={potion} alt="potion" />
              <h1>Elixirs</h1>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/leaderboard">
            <button id="trophyButton" type="button">
              <img id="trophy" src={trophy} alt="trophy" />
              <h1>Leaderboard</h1>
            </button>
          </NavLink>
        </li>
        <PlayingMusic />
      </ul>
    </nav>
  );
}

export default NavBar;
