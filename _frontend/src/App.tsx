import { Container, Grid2 } from "@mui/material";
import Header from "./componets/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Fixed the import for Router
import ProductDetails from "./componets/Product/ProductDetails";
import Home from "./componets/Home";
import AddProductForm from "./AddProductForm";
import { SideMenu } from "./componets/SideMenu/SideMenu";
import { useState } from "react";
import { LoginWindow } from "./componets/Login/LoginWindow";

function App() {
  const [isActive, setActive] = useState(false);
  const MenuToggleActive = () => {
    setActive(!isActive);
  };

  const [isLoginOpen, setLoginOpen] = useState(false);
  // const LoginWindowOpen = (state: boolean) => {
  //   setLoginOpen(state);
  // };

  // const [bascket, setBascket] = useState([]);

  return (
    <>
      <Router>
        <Header
          MenuToggleActive={MenuToggleActive}
          OpenLoginWindow={setLoginOpen}
        ></Header>
        {/* <span>{String(isLoginOpen)}</span> */}

        <LoginWindow isOpen={isLoginOpen}></LoginWindow>

        <Grid2 container sx={{ height: "100vh", overflowX: "scroll" }}>
          <Grid2
            size={isActive ? { xs: 12, sm: 3 } : { xs: 0 }}
            sx={{ transition: "250ms" }}
          >
            <SideMenu />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 9 }}>
            <Container sx={{ height: "100%", transition: "50ms" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/create" element={<AddProductForm />} />
              </Routes>
            </Container>
          </Grid2>
        </Grid2>
      </Router>
    </>
  );
}

export default App;
