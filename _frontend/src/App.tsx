import { Container, Switch } from "@mui/material";
import Header from "./componets/Header";
import "./App.css";
import ProductGrid from "./componets/ProductsGrid";
import testProducts from "./common/testProductData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Fixed the import for Router
import ProductDetails from "./componets/ProductDetails";

const products = testProducts;

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<ProductGrid products={products} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
