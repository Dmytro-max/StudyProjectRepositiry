import { Divider, Stack, Typography } from "@mui/material";
import "./Busket.css";
import { ProductElement } from "./ProductElement";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Product } from "../../api/models/Product";
import { ProductsService } from "../../api";

const Busket = () => {
  const { store } = useContext(Context);
  const productsIds = store.getCartProductsIds();
  console.log(productsIds);
  const [product, setProduct] = useState<Product | null>(null);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     for (const id in productsIds) {
  //       console.log(id);
  //       try {
  //         if (id) {
  //           const res: Product = await ProductsService.productControllerFindOne(
  //             id
  //           );
  //           setProduct(res);
  //         }
  //       } catch (error) {
  //         console.error("Failed to fetch products:", error);
  //       }
  //     }
  //   };
  //   fetchProduct();
  // }, []);

  // if (!product) {
  //   return <></>;
  // }

  return (
    <div className="basket">
      <Typography variant="h4" m={2}>
        Кошик
      </Typography>
      <Stack divider={<Divider orientation="horizontal" />} gap={2}>
        <div className="ProductList"></div>
        {/* {products.map((product) => (
          <ProductElement key={product.name} props={product} />
        ))} */}
        {/* <ProductElement key={product?.name} props={product} /> */}
        {/* <div className="ProductList"></div> */}
      </Stack>
    </div>
  );
};

export default observer(Busket);
