import { Container } from "@mui/material";
import Header from "./componets/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Fixed the import for Router
import ProductDetails from "./componets/ProductDetails";
import Home from "./componets/Home";
import AddProductForm from "./componets/AddProductForm";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/create" element={<AddProductForm />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
