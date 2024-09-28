import React, { useEffect } from "react";
import { Grid } from "@mui/material"; // Import Grid from MUI
import ProductCard from "./ProductCard"; // Import your ProductCard component
import { useNavigate } from "react-router-dom";
import { Product } from "../api/models/Product";

// Props for the ProductGrid component
interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const navigate = useNavigate();
  const productClickHandler = (id: string) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    console.log(products);
    debugger
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      {products.length > 0 &&
        products.map((product) => (
          <Grid
            item
            xs={12} // Full width on extra-small screens
            sm={6} // Half width on small screens
            md={4} // One-third width on medium and larger screens
            key={product.id}
          >
            <ProductCard {...product} onClick={productClickHandler} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductGrid;
