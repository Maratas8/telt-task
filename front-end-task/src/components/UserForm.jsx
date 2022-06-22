import React, { useContext } from "react";
import { CategoryContext, UserContext } from "../App";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";

function UserForm() {
  const { categoryList } = useContext(CategoryContext);
  const { users, setUsers } = useContext(UserContext);

  // console.log(users);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      gender: "",
      category: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(30, "Must be 30 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(30, "Must be 30 characters or less")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email name is required"),
      age: Yup.number().positive().integer().required("Age is required"),
      category: Yup.string().min(1, "Must select a category"),
      password: Yup.string()
        .min(6, "Password should be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values, actions) => {
      // console.log(values);
      const user = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        age: values.age,
        gender: values.gender,
        category: values.category,
        password: values.password,
      };
      // console.log(user);
      setUsers([...users, user]);
      actions.resetForm();
      // console.log(users);
    },
  });

  return (
    <div className="user-form">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className={formik.errors.firstName && formik.touched.firstName ? "input-error" : ""}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className={formik.errors.lastName && formik.touched.lastName ? "input-error" : ""}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={formik.errors.email && formik.touched.email ? "input-error" : ""}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <br />
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          min="1"
          max="120"
          required
          onChange={formik.handleChange}
          value={formik.values.age}
          className={formik.errors.age && formik.touched.age ? "input-error" : ""}
        />
        <br />


        <label htmlFor="gender">Gender:</label>
        <br />
        <select
          name="gender"
          id="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.age && formik.touched.age ? "input-error" : ""}
        >
          <option>{""}</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>

        </select>
        {formik.touched.category && formik.errors.category ? (
          <p>{formik.errors.category}</p>
        ) : null}
        <br />

        <label htmlFor="category">Category:</label>
        <br />
        <select
          name="category"
          id="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.category && formik.touched.category ? "input-error" : ""}
        >
          <option>{""}</option>
          {categoryList.map((category, index) => (
            <option key={index} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
        {formik.touched.category && formik.errors.category ? (
          <p>{formik.errors.category}</p>
        ) : null}
        <br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          minLength="6"
          required
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          className={formik.errors.password && formik.touched.password ? "input-error" : ""}
        />
        <Button text="Add User" type="submit" />
      </form>
    </div>
  );
}

export default UserForm;
