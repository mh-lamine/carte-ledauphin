export default function Product({title}) {

  return (
    <div className="container">
      <h2>{title}</h2>
      {/* <ul className="product-list">
        {data[0].subcategories[0].products.map((category) => (
          <li key={category.name} className="product-item">
            <p>{category.productName}</p>
            <span>{category.price.toFixed(2)}€</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
