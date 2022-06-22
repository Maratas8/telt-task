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
        <div className="category-menu">
          <Link key={index} to={`/${category.categoryName}`}>
            {category.categoryName}
          </Link>

            
          {category.subCategories.map((subCategory, index) => (
            <div className="subcategory-menu">
              <Link key={index} to={`/${subCategory.subCategoryName}`}>
                {subCategory.subCategoryName}
              </Link>

              {subCategory.subSubCategories.map((subSubCategory, index) => (
                <div className="subsubcategory-menu">
                  <Link key={index} to={`/${subSubCategory}`}>
                    {subSubCategory}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
