import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <img src={imgUrl} alt="PokeApi" />
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </div>
  );
}
