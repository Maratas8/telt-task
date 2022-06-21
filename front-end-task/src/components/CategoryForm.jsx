import React, { useContext, useState } from "react";
import { CategoryContext } from "../App";
import Button from "./Button";

function CategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const { setCategoryList } = useContext(CategoryContext);
  const { categoryList } = useContext(CategoryContext);

  const handleAddCategoryButtonClick = (event) => {
    event.preventDefault();
    const newCategoryObject = { categoryName: event.target.category.value };
    setCategoryList([...categoryList, newCategoryObject]);
  };

  return (
    <div>
      <div className="add-category-form">
        <h4>Add new category</h4>
        <form onSubmit={handleAddCategoryButtonClick}>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            minLength="3"
            maxLength="20"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
          <Button
            type="submit"
            text="Add Category"
            className="add-category-btn btn"
          />
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
