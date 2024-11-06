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

  const img =
    "data:image/jpeg;base64,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";

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
          src={img}
          alt={product.name}
          style={{
            // width: "100%",
            // maxHeight: "400px",
            minWidth: "300px",
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
          {product.available ? "Aveilable" : "Unavailable"}
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