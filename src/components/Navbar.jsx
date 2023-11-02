<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios, { Axios } from "axios";

export default function Navbar() {
  const imgUrl =
    "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png";
=======
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
>>>>>>> 13476041d737b8270cd9b23015de5cdf779ecc54

  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <img src={imgUrl} alt="PokeApi" />
        </Link>
<<<<<<< HEAD
        <Link className="about" to="/about">
          About
        </Link>
      </nav>
=======
        <Link to="/about">About</Link>
      </nav>

>>>>>>> 13476041d737b8270cd9b23015de5cdf779ecc54
      <Outlet />
    </div>
  );
}
