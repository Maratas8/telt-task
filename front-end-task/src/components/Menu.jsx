import React from "react";
import { Link } from "react-router-dom";


function Menu() {
  return (
    <div className="menu-links">
      <Link to="/new-user">New User</Link>
      <Link to="/new-category">New Category</Link>
    </div>
  );
}

export default Menu;
