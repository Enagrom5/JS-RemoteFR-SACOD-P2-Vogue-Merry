import { NavLink } from "react-router-dom";

import PlayingMusic from "./Music";

function NavBar() {
  return (
    <nav>
      <NavLink to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/">
        <div className="head">
          <img id="logo" src="/JS-RemoteFR-SACOD-P2-Vogue-Merry/assets/logo.png" alt="logo" />
          <div className="title">
            <h1>Elixir Maker</h1>
            <p>TEST YOUR KNOWLEDGE</p>
          </div>
        </div>
      </NavLink>
      <ul className="/JS-RemoteFR-SACOD-P2-Vogue-Merry/leaderboard">
        <li>
          <NavLink to="difficulty">
            <button id="playButton" type="button">
              <img
                id="potion"
                src="/JS-RemoteFR-SACOD-P2-Vogue-Merry/assets/chaudron.png"
                alt="chaudron"
              />
              <h1>Play</h1>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/elixir">
            <button id="potionButton" type="button">
              <img id="potion" src="/JS-RemoteFR-SACOD-P2-Vogue-Merry/assets/potion.svg" alt="potion" />
              <h1>Elixirs</h1>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/leaderboard">
            <button id="trophyButton" type="button">
              <img id="trophy" src="/JS-RemoteFR-SACOD-P2-Vogue-Merry/assets/trophy.svg" alt="trophy" />
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
