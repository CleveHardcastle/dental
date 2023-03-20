import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">
            <a href="/">Home</a>
          </li>
          <li className="items">
            <a href="/brushing">Brushing</a>
          </li>
          <li className="items">
            <a href="/product">Product</a>
          </li>
          <li className="items">
            <a href="/#">Contact</a>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        <img
          className="w-[35px]"
          src={process.env.PUBLIC_URL + "/images/hamburger.png"}
        />
      </button>
    </nav>
  );
}
