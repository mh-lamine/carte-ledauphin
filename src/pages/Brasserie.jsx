import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Brasserie() {
  return (
    <div className="flex flex-col">
      <Link to="alcoholizeddrink">Boissons alcoolisées</Link>
      <Link to="nonalcoholizeddrink">Boissons sans alcool</Link>
      <Link to={"/"} className="flex items-center">
        <RiArrowLeftDoubleLine /> Retour
      </Link>
    </div>
  );
}
