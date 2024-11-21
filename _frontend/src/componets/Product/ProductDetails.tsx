import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "../../api/models/Product";
import { ProductsService } from "../../api";

import pillsThumbnail from "../../assets/pillsThumbnail.svg";

const thumbnail = pillsThumbnail;

interface ProductDetailProps {
  // Optionally define a prop type if you're passing props
}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const res: Product = await ProductsService.productControllerFindOne(
            id
          );
          setProduct(res);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProduct();
  }, []);

  // For demonstration, here is a dummy product data

  if (!product) {
    return (
      <>
        <h1>No product</h1>
      </>
    );
  }

  return (
    <Container
      sx={{
        paddingTop: 6, // Add padding from the top
        paddingBottom: 4,
        minHeight: "100vh", // Full height of the viewport
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: 4, // Space between grid items
        flexDirection: "column",
        // alignItems: "center",
        flexFlow: "row",
      }}
    >
      <Box className="product-info-bar">
        <Typography variant="h4" component="h1" gutterBottom>
          {product.name}
        </Typography>

        <img
          src={product.coverImageUrl ? product.coverImageUrl : thumbnail}
          alt={product.name}
          style={{
            maxHeight: "400px",
            minWidth: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }} // Adjust image styling
        />

        <Typography variant="h4" paragraph sx={{ textAlign: "left" }}>
          Опис
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
          {product.description}
        </Typography>
      </Box>
      <Stack
        className="product-specifications-bar"
        sx={{}}
        divider={<Divider orientation="horizontal" />}
      >
        <Typography variant="h5" color="textPrimary" sx={{ marginY: 2 }}>
          Характеристики:
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ marginY: 2 }}>
          Ціна: {product.price}₴
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ marginY: 2 }}>
          {product.available ? "В наявності" : "Не в наявності"}
        </Typography>

        <Button
          aria-label=""
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, justifyContent: "space-between", width: "90%" }}
        >
          Add to Cart <AddShoppingCartIcon />
        </Button>
      </Stack>
    </Container>
  );
};

export default ProductDetail;
