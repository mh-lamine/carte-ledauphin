import PropTypes from "prop-types";

export default function ProductCard({product}) {
  return (
    <div className="flex flex-col rounded-md overflow-hidden shadow-sm">
      <img
        src={product.path}
        alt={product.name}
        className="aspect-square object-cover"
      />

      <h2 className="text-4xl absolute p-4 uppercase font-semibold font-mono tracking-wider mix-blend-overlay text-white flex-wrap">
        {product.name}
      </h2>
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="text-xl">{product.description}</p>
        <p className="px-4 text-3xl font-extralight">{product.price}€</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
