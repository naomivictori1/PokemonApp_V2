import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const imgUrl =
    "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png";
  // "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <img src={imgUrl} alt="PokeApi" />
        </Link>
        <Link className="about" to="/about">
          About
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
