// import { useState } from "react";
import "./App.css";
import Auth from "./components/auth";

function App() {
  const isauth = false;
  if (!isauth) return <Auth />;
  return <div className="App">{/* <Auth /> */}</div>;
}

export default App;
