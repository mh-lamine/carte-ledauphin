import { GiDolphin } from "react-icons/gi";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function Brasserie() {
   const navigate = useNavigate();
  return (
    <div className="p-4">
      <header className="p-4 relative w-full flex items-center justify-center">
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
        <Link
          to="/"
          className="text-3xl uppercase font-mono whitespace-nowrap tracking-widest"
        >
          <GiDolphin className="text-red-600" />
        </Link>
      </header>
      <Link to="starter">Entrées</Link>
      <Link to="dish">Plats</Link>
      <Link to="dessert">Desserts</Link>
    </div>
  );
}
