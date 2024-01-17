import { useEffect, useState } from "react";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./boissons.css";
import fakedata from "../../assets/fakedata.json";

export default function Boissons() {
  const [data, setData] = useState(fakedata.drinkCategories);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log(data)
  //       const response = await fetch("api");
  //       const result = await response.json();
  //       setData(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="container">
      <Link to={"/"} id="back-arrow">
        <RiArrowLeftDoubleLine /> Retour
      </Link>
      <h2>Boissons alcoolisées</h2>
      <ul>
        {data[0].subcategories.map((category) => {
          let path = `/boissons/${category.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "")
            .toLowerCase()}`;
          return (
            <Link to={path} key={category.id}>
              <li>
                <img src={category.image} />
                <h3>{category.name}</h3>
              </li>
            </Link>
          );
        })}
      </ul>
      <h2>Boissons non-alcoolisées</h2>
      <ul>
        {data[1].subcategories.map((category) => (
          <Link
            to={`/boissons/${category.name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()}`}
            key={category.id}
          >
            <li>
              <img src={category.image} />
              <h3>{category.name}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
