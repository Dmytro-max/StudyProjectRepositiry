import { useContext, useEffect } from "react";
import ProductGrid from "./Product/ProductsGrid";
import CircularProgress from "@mui/material/CircularProgress";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { Typography, Box } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const Home = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getProducts();
  }, []);

  return (
    <>
      {store.productsIsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <CircularProgress />
        </div>
      ) : store.filteredProducts.length > 0 ? (
        <ProductGrid products={store.filteredProducts}></ProductGrid>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            color: "text.secondary",
          }}
        >
          <SentimentDissatisfiedIcon
            sx={{ fontSize: 60, mb: 2, color: "gray" }}
          />
          <Typography variant="h6" sx={{ mb: 1 }}>
            No products found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your filters or check back later.
          </Typography>
        </Box>
      )}
    </>
  );
};

export default observer(Home);
