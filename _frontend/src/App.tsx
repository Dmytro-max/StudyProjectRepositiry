import { Container, Box } from "@mui/material";
import Header from "./componets/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductDetails from "./componets/Product/ProductDetails";
import Home from "./componets/Home";
import AddProductForm from "./AddProductForm";
import Login from "./componets/Login/Login";
import SignUp from "./componets/SignUp/SignUp";
import { SideMenu } from "./componets/SideMenu/SideMenu";
import { Context } from "./main.tsx";

import Authorization from "./componets/Authorization/Authorization";
import { Busket } from "./componets/Busket/Busket";
function App() {
  const [isActive, setActive] = useState(false);
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const MenuToggleActive = () => setActive(!isActive);

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
                <Route path="/Busket" element={<Busket />} />
              </Routes>
            </Container>
          </Grid2>
        </Grid2>
      </Router>
    </>
  );
}

export default App;
// const Theme = createTheme({
//   components: {},
// });
