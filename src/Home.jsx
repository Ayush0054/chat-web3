import React from "react";
import Header from "./components/header";
import Messages from "./components/messages";
// import tailwindConfig from "../tailwind.config.cjs";
const Home = () => {
  return (
    <div className=" h-screen overflow-y-scroll bg-gray-800 ">
    {" "}
    <Header />
    <div className=" max-w-screen-2xl mx-auto ">
      <Messages />
    </div>
  </div>
  );
};

export default Home;