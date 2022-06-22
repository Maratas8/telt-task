import React, { useContext, useState } from "react";
import { CategoryContext } from "../App";
import Button from "./Button";

function CategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const { categoryList, setCategoryList } = useContext(CategoryContext);

  const handleAddCategory = (event) => {
    event.preventDefault();

    const newCategoryObject = {
      categoryName: event.target.category.value,
      subCategories: [
        {
          subCategoryName: "",
          subSubCategories: [""],
        },
      ],
    };

    setCategoryList([...categoryList, newCategoryObject]);
  };

  const handleAddSubCategory = (event) => {
    event.preventDefault();
    const categoryName = event.target.category.value;
    const subCategoryName = event.target.subCategory.value;

    categoryList.map((category, index) =>
      category.categoryName === categoryName
        ? category.subCategories.push({
            subCategoryName: subCategoryName,
            subSubCategories: ["", ""],
          })
        : category.subCategories.push({
            subCategoryName: "",
            subSubCategories: ["", ""],
          })
    );

    console.log(categoryName);
    console.log(subCategoryName);
    console.log(categoryList);
  };

  return (
    <div>
      <div className="add-category-form">
        <h4>Add new category</h4>
        <form onSubmit={handleAddCategory}>
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

      <div className="add-subcategory-form">
        <h4>Add new sub-category</h4>
        <form onSubmit={handleAddSubCategory}>
          <label>Select Category to add a sub-category to:</label>
          <select
            name="category"
            id="category"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          >
            <option>{""}</option>
            {categoryList.map((category, index) => (
              <option key={index} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="subCategory"
            name="subCategory"
            placeholder="Sub-Category"
            minLength="3"
            maxLength="20"
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
            required
          />
          <Button
            type="submit"
            text="Add Sub-Category"
            className="add-subcategory-btn btn"
          />
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
