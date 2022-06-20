import React, { useContext } from "react";
import { CategoryContext } from "../App";

function UserForm() {
  const { setCategoryList } = useContext(CategoryContext);
  const { categoryList } = useContext(CategoryContext);

  return (
    <div className="user-form">
      <form>
        <input type="text" id="fname" name="fname" placeholder="First Name" />
        <br />
        <input type="text" id="lname" name="lname" placeholder="Last Name" />
        <br />
        <input type="email" id="email" name="Email" placeholder="email" />
        <br />
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          min="1"
          max="120"
        />
        <br />
        <fieldset>
          <legend>Gender:</legend>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
          <br />
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <br />
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other">Other</label>
          <br />
        </fieldset>

        <label htmlFor="category">Category:</label>
        <br />
        <select name="category" id="category">
          {categoryList.map((category, index) => (
            <option key={index} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
        <br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </form>
    </div>
  );
}

export default UserForm;
