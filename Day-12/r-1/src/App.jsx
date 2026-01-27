import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  let { register, handleSubmit, reset } = useForm();

  let handleSubmitForm = async (data) => {
    try {
      let res = await axios.post(
        "http://localhost:3000/api/auth/register",
        data,
        {
          withCredentials: true,
        }
      );

      if (res) {
        console.log("ok", res);
      }
    } catch (error) {
      console.log("error in api", error);
    }
  };

  const handleHome = async () => {
    try {
      let res = await axios.get("http://localhost:3000/api/home", {
        withCredentials: true,
      });
      if (res) {
        console.log(res);
        alert("agys bhai..");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <input {...register("username")} type="text" placeholder="userName" />{" "}
        <br />
        <input {...register("email")} type="text" placeholder="email" /> <br />
        <input {...register("mobile")} type="number" placeholder="mobile" />
        <br />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        <br />
        <button type="submit">Create</button>
      </form>

      <button onClick={handleHome}>Go to home</button>
    </div>
  );
};

export default App;