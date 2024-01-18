import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Boissons from "./pages/boissons/Boissons";
import Plats from "./pages/Plats";
import Home from "./pages/Home";
import Product from "./components/Product";
import fakedata from "./assets/fakedata.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(fakedata.drinkCategories);
  return (
    <div className="app">
      <h1>Carte Le Dauphin</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boissons" element={<Boissons />} />
          <Route path="/plats" element={<Plats />} />
          {data.map((category) => { 
            if (category.name === "Boissons alcoolisées") {
              return category.subcategories.map((subcategory) => {
                let customPath = `/boissons/${subcategory.name
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, "")
                  .toLowerCase()}`;
                return(
                  <Route
                  path={customPath}
                  element={
                    <Product
                      title={subcategory.name}
                      data={subcategory.products}
                    />
                  }
                />
                )
              });
            }
          })}
          {/* <Route path="/boissons/bieres" element={<Product title="biouze"/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
