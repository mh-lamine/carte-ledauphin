import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import carte from "../assets/carte.json";
import ProductCard from "@/components/ProductCard";
import { GiDolphin } from "react-icons/gi";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

export default function ProductsPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const category = useParams().category;
  useEffect(() => {
    setProducts(
      carte.products.filter((product) => product.category === category)
    );
    console.log(products);
  }, [category]);
  return (
    <div className="p-4 flex flex-col gap-4">
      <header className="p-4 relative w-full flex items-center justify-center">
        <Link
          to={".."}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="absolute left-0 px-4 text-2xl">
          <RiArrowLeftDoubleLine />
        </Link>
        <Link
          to="/"
          className="text-3xl uppercase font-mono whitespace-nowrap tracking-widest"
        >
          <GiDolphin className="text-red-600" />
        </Link>
      </header>
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
