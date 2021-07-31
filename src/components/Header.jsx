import React from "react";

function Header({ titulo }) {
  
  return (
      <h1 className="has-text-centered title is-1 m-3">{ titulo }</h1>
  );
}

export default Header;
