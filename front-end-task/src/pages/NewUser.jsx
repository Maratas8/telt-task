import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import UserForm from "../components/UserForm";

function NewUser() {
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
          <h1>New User</h1>
          <UserForm />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default NewUser;
