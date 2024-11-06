import { useEffect, useState } from "react";
import ProductGrid from "./Product/ProductsGrid";
import { Product, ProductsService } from "../api";

const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await ProductsService.productControllerFindAll();
        setProducts(res);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts(); // Call the async function
  }, []);

  return (
    <>
      {products && products.length > 0 ? (
        <ProductGrid products={products}></ProductGrid>
      ) : (
        <h1>no products</h1>
      )}
    </>
  );
};

export default Home;
