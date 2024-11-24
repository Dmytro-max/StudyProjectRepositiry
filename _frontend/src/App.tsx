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
import Busket from "./componets/Busket/Busket";

function App() {
  const [isActive, setActive] = useState(false);
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);
  useEffect(() => {
    // if (localStorage.getItem("cartProducts")) {
    //   const products = JSON.parse(
    //     localStorage.getItem("cartProducts") as string
    //   );
    //   store.setCartProductsIds(products);
    //   console.log(store.getCartProductsIds());
    // }
  });

  const MenuToggleActive = () => setActive(!isActive);

  onbeforeunload = () => {
    const products = store.getCartProductsIds();
    localStorage.setItem("cartProducts", JSON.stringify(products));
  };

  return (
    <Router>
      <Header MenuToggleActive={MenuToggleActive} />
      <Box sx={{ display: "flex", height: "100vh" }}>
        {isActive && (
          <Box
            sx={{
              width: { xs: "100%", sm: "240px" },
              transition: "width 250ms",
              borderRight: 1,
              borderColor: "divider",
            }}
          >
            <SideMenu />
          </Box>
        )}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            overflow: "auto",
          }}
        >
          <Container sx={{ p: 2, paddingTop: "2.5rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/create" element={<AddProductForm />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/Busket" element={<Busket />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
