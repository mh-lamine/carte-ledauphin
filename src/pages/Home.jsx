import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <div className="relative rounded-sm overflow-hidden shadow-md">
        <Link to="/brasserie">
          <h2 className="uppercase absolute bottom-0 text-6xl font-extrabold font-mono tracking-wider mix-blend-overlay text-white p-2">
            Brasserie
          </h2>
          <img src="brasserie.png" className="aspect-square object-cover" />
        </Link>
      </div>
      <div className="p-2 flex items-center justify-center">
        <span className="border-solid w-full border-b-2 border-red-400 opacity-50"></span>
        <h1 className="text-xl uppercase font-mono whitespace-nowrap px-4 tracking-widest">
          Bar Le Dauphin
        </h1>
        <span className="border-solid w-full border-b-2 border-red-400 opacity-50"></span>
      </div>
      <div className="relative rounded-sm overflow-hidden shadow-md">
        <Link to="/restaurant">
          <h2 className="uppercase absolute text-6xl font-semibold font-mono tracking-wider mix-blend-overlay text-white p-2">
            Restaurant
          </h2>
          <img src="restaurant.png" className="aspect-square object-cover" />
        </Link>
      </div>
    </div>
  );
}
