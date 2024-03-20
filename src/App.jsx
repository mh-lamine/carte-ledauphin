import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brasserie from "./pages/Brasserie";
import Restaurant from "./pages/Restaurant";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="max-w-screen-sm mx-auto w-full">
      {/* <h1 className="text-3xl p-10">Carte Le Dauphin</h1> */}
      <Routes>
        <Route path="/" index element={<Home />} />

        <Route path="/brasserie" element={<Brasserie />} />
        <Route path="/brasserie/:category" element={<ProductsPage />} />

        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/:category" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
