import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="ff.jpg"
        width={920}
        height={250}
        alt="moviedux"
      />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
}
