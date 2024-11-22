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
import { Busket } from "./componets/Busket/Busket";
import "leaflet/dist/leaflet.css";
import PharmacyMap from "./componets/Pharmacy/PharmacyMap.tsx";

function App() {
  const [isActive, setActive] = useState(true);
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const MenuToggleActive = () => setActive(!isActive);

  return (
    <Router>
      <Header MenuToggleActive={MenuToggleActive} />
      <Box sx={{ display: "flex", height: "100vh" }}>
        {isActive && (
          <Box
            sx={{
              width: { xs: "100%", sm: "300px" },
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
            justifyContent: "center",
            overflow: "auto",
          }}
        >
          <Routes>
            {/* Routes inside the Container */}
            <Route
              path="*"
              element={
                <Container sx={{ p: 2 }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/create" element={<AddProductForm />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/Busket" element={<Busket />} />
                  </Routes>
                </Container>
              }
            />

            {/* PharmacyMap route outside of the Container */}
            <Route path="/pharmacy-map" element={<PharmacyMap />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
