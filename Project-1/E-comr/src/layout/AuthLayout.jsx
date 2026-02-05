import React, { useState } from "react";
import { Outlet } from "react-router";
import Register from "../components/Register";
import Login from "../components/Login";

const AuthLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <Register setToggle={setToggle} />
      ) : (
        <Login setToggle={setToggle} />
      )}
    </div>
  );
};

export default AuthLayout;