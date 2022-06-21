import React, { useContext } from "react";
import { useState } from "react";
import { CategoryContext, UserContext } from "../App";
import Button from "./Button";

function UserForm() {
  const { categoryList } = useContext(CategoryContext);
  const { users, setUsers } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");

  console.log(users);

  const handleUserSubmit = (event) => {
    event.preventDefault();

    const user = {
      firstName: event.target.fname.value.trim(),
      lastname: event.target.lname.value.trim(),
      email: event.target.email.value.trim(),
      age: event.target.age.value,
      gender: event.target.gender.value,
      category: event.target.category.value,
      password: event.target.password.value,
    };

    console.log(user);

    setUsers([...users, user]);
    console.log(users);
  };



  return (
    <div className="user-form">
      <form onSubmit={handleUserSubmit}>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="First Name"
          required
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Last Name"
          required
        />
        <br />
        <input
          type="email"
          id="email"
          name="Email"
          placeholder="email"
          required
        />
        <br />
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          min="1"
          max="120"
          required
        />
        <br />
        <fieldset required>
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
            <option key={index} value={category.categoryName.toLowerCase()}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          minLength="6"
          required
        />
        <Button text="Add User" type="submit" />
      </form>
    </div>
  );
}

export default UserForm;
