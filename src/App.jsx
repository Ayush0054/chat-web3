import { Auth, useAuth } from "@arcana/auth-react";
import { useNavigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./Home";


function App() {

  const onLogin = () => {
    // Route to authenticated page
    useNavigate("/home")
  }
  const auth = useAuth();

  return (
    <>
    <div>
      {auth.loading ? (
        "Loading"
        ) : auth.isLoggedIn ? (
          <p>Logged In</p>
          ) : (
            <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
        </div>
      )}
    </div>
    
    <Router>
      <Routes>
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
