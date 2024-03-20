import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import carte from "../assets/carte.json";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const category = useParams().category;
  useEffect(() => {
    setProducts(
      carte.products.filter((product) => product.category === category)
    );
  }, [category]);
  return (
    <div className="p-4 flex flex-col gap-4">
      {products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })}
    </div>
  );
}
