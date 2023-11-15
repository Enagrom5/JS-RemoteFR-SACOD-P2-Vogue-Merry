import { Link } from "react-router-dom";
import grandLogo from "../assets/grand_logo.png";

function Accueil() {
  return (
    <div className="container-accueil">
      <img className="grand-logo" src={grandLogo} alt="grand_logo" />

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
