import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Brasserie() {
  return (
    <div>
      <Link to={"/"}>
        <RiArrowLeftDoubleLine /> Retour
      </Link>
      <Link to="/starter">Entrées</Link>
      <Link to="/dish">Plats</Link>
      <Link to="/desser">Desserts</Link>
    </div>
  );
}
