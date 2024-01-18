import React from "react";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Plats() {
  return (
    <div className="container">
      <Link to={"/"} id="back-arrow">
        <RiArrowLeftDoubleLine /> Retour
      </Link>
      <h1>Plats</h1>
    </div>
  );
}
