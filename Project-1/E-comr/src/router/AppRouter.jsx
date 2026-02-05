import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import HomeScreen from "../screens/HomeScreen";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import AuthProtected from "../components/AuthProtected";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "http://localhost:3000/api/auth/current-user",
          {
            withCredentials: true,
          }
        );
        if (res) {
          console.log(res.data.user);
          dispatch(addUser(res.data.user));
        }
      } catch (error) {
        console.log("error in current user api", error);
      }
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtected />,
      children: [{ path: "", element: <AuthLayout /> }],
    },

    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: <HomeScreen />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;