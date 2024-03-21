import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function Brasserie() {
   const navigate = useNavigate();
  return (
    <div className="flex flex-col">
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
      <Link to="alcoholizeddrink">Boissons alcoolisées</Link>
      <Link to="nonalcoholizeddrink">Boissons sans alcool</Link>
    </div>
  );
}
