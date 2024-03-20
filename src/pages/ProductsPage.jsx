import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import carte from "../assets/carte.json";
import ProductCard from "@/components/ProductCard";
import { GiDolphin } from "react-icons/gi";

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
          <>
            <ProductCard key={product.id} product={product} />
            <div className="p-2 flex items-center justify-center gap-4">
              <span className="border-solid w-full border-t-2 border-red-400 opacity-50"></span>
              <h1 className="text-xl uppercase font-mono whitespace-nowrap px-4 tracking-widest">
                <GiDolphin className="text-red-600" />
              </h1>
              <span className="border-solid w-full border-t-2 border-red-400 opacity-50"></span>
            </div>
          </>
        );
      })}
    </div>
  );
}
