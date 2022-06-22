import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { UserContext } from "../App";
import { useContext } from "react";

function UsersByCategory({ categoryName }) {
  const { users } = useContext(UserContext);
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="nav-main">
        <div className="nav">
          <Menu />
        </div>
        <div className="main">
          <h1>Users by {categoryName}</h1>
          <div className="users">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((user) => user.category === categoryName)
                  .map((user, index) => (
                    <tr key={index}>
                      <th>{user.firstName}</th>
                      <th>{user.lastName}</th>
                      <th>{user.email}</th>
                      <th>{user.age}</th>
                      <th>{user.gender}</th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default UsersByCategory;
