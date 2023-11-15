import { Link } from "react-router-dom";

function OngletLevel() {
  return (
    <div className="container-accueil">
      <div className="levelButton">
        <Link to="JS-RemoteFR-SACOD-P2-Vogue-Merry/easy">
          <button type="button">EASY</button>
        </Link>
        <Link to="JS-RemoteFR-SACOD-P2-Vogue-Merry/medium">
          <button type="button">MEDIUM</button>
        </Link>
        <Link to="JS-RemoteFR-SACOD-P2-Vogue-Merry/hard">
          <button type="button">HARD</button>
        </Link>
      </div>
    </div>
  );
}

export default OngletLevel;
