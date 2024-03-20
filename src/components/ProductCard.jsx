import PropTypes from "prop-types";

export default function ProductCard({product}) {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={product.path}
        alt={product.name}
        className="aspect-square object-cover"
      />

      <h2 className="text-6xl absolute p-4 uppercase font-semibold font-mono tracking-wider mix-blend-overlay text-white">
        {product.name}
      </h2>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xl">{product.description}</p>
        <p className="p-4 text-3xl font-extralight border-x-2 border-slate-200 rounded-xl">{product.price}€</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
