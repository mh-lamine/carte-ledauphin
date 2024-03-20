import { GiDolphin } from "react-icons/gi";
import PropTypes from "prop-types";

export default function ProductCard({product}) {
  return (
    <div className="grid grid-cols-[3fr,1fr,5fr]">
      <img
        src={`https://source.unsplash.com/random/?${product.name}`}
        alt={product.name}
        className="aspect-square object-cover"
      />
      <div className="p-2 flex flex-col items-center justify-center gap-4">
        <span className="border-solid h-full border-r-2 border-red-400 opacity-50"></span>
        <h1 className="text-xl uppercase font-mono whitespace-nowrap px-4 tracking-widest">
          <GiDolphin className="text-red-600" />
        </h1>
        <span className="border-solid h-full border-r-2 border-red-400 opacity-50"></span>
      </div>
      <div>
        <h2 className="text-2xl">{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}€</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
