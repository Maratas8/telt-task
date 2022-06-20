import React, { useContext } from "react";
import { CategoryContext } from "../App";

function CategoryForm() {
  const { setCategoryList } = useContext(CategoryContext);
  const { categoryList } = useContext(CategoryContext);

  return <div>CategoryForm</div>;
}

export default CategoryForm;
