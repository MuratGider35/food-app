import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";
import LoginProvider from "./components/context/LoginProvider";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<PrivateRouter />}>
              <Route path="" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
