import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function Brasserie() {
   const navigate = useNavigate();
  return (
    <div>
      <Link
        to={".."}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="absolute left-0 px-4 text-2xl"
      >
        <RiArrowLeftDoubleLine />
      </Link>
      <Link to="starter">Entrées</Link>
      <Link to="dish">Plats</Link>
      <Link to="dessert">Desserts</Link>
    </div>
  );
}
