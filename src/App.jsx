import Login from "./components/auth";
import Header from "./components/header";
import Messages from "./components/messages";
import { Auth, useAuth } from "@arcana/auth-react";
import { useNavigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./home";

function App() {
  let navigate = useNavigate();
  const onLogin = () => {
    // Route to authenticated page
    // navigate("/home");
    return <home />;
  };
  // onLogin();
  const auth = useAuth();

  return (
    <>
      <div>
        {auth.loading ? (
          "Loading"
        ) : auth.isLoggedIn ? (
          <Home />
        ) : (
          <div>
            <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
          </div>
        )}
      </div>

      {/* <Routes>
        <Route path="/home" exact element={<Home />} />
      </Routes> */}
    </>
  );
}

export default App;
