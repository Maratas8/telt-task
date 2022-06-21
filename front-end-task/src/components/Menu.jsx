import React, { useContext } from "react";
import { CategoryContext } from "../App";
import { Link } from "react-router-dom";

function Menu() {
  const { categoryList } = useContext(CategoryContext);

  return (
    <div className="menu-links">
     
          <Link to="/new-user">New User</Link>
        
          <Link to="/new-category">New Category</Link>
        
          {categoryList.map((category, index) => (
            <Link key={index} to={`/${category.categoryName}`}>
              {category.categoryName}

              {/* 
                {category.subCategories.map((subCategory, index) => (
                  <li key={index} className="menu-sublinks">
                    {subCategory.subCategoryName}
                  </li>
                ))}
               */}
            </Link>
          ))}
      
    </div>
  );
}

export default Menu;
