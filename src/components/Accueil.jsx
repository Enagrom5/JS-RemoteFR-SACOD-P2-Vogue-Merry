import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="container-accueil">
      <img
        className="grand-logo"
        src="/JS-RemoteFR-SACOD-P2-Vogue-Merry/assets/grand_logo.png"
        alt="grand_logo"
      />

      <div className="buttons">
        <Link to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/difficulty">
          <button className="play transition" type="button">
            PLAY
          </button>
        </Link>
        <Link to="/JS-RemoteFR-SACOD-P2-Vogue-Merry/rules">
          <button className="rules transition" type="button">
            RULES
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Accueil;
