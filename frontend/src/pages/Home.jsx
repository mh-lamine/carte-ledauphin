import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <div className="nav-item">
          <Link to="/boissons">
            <img src="https://source.unsplash.com/random/?bar,cocktail,drink" />
            <h2>
              <span>Bras</span>serie
            </h2>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/plats">
            <img src="https://source.unsplash.com/random/?bar,plats,food" />
            <h2>
              <span>Rest</span>aurant
            </h2>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
