import { Grid2, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import { Product } from "../../api/models/Product";
import classes from "./ProductElement.module.css";
import { useState } from "react";

export const ProductElement = ({ props }) => {
  const [quantity, setQuantity] = useState(1);
  //   let Image = props.image;
  const Name = props.name;
  const Price = props.price;
  // const Description = props.description;
  return (
    // <div className={classes.product}>
    <Grid2
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.product}
    >
      <Grid2
        size={{ xs: 6, sm: 7 }}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <img src="" alt="" />
        <Typography
          variant="h6"
          sx={{
            maxWidth: "25rem",
            overflow: "clip",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {Name}
        </Typography>
      </Grid2>
      {/* <div style={{ display: "flex" }}> */}
      <Grid2 size={{ xs: 3, sm: 2 }}>
        <Stack
          direction="row"
          // className={classes.quantityBlock}
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: "2rem",
            justifyContent: "space-around",
            border: "0.05rem solid #000",
            borderRadius: "0.5rem",
          }}
        >
          <button
            className={classes.button}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
          <Typography
            component="a"
            id=""
            className={classes.quantity}
            style={{
              fontSize: "1.35rem",
              height: "2rem",
              paddingTop: "0.2rem",
            }}
          >
            {quantity}
          </Typography>
          <button
            className={classes.button}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </Stack>
      </Grid2>
      {/* </div> */}
      <Grid2 size={{ xs: 2, sm: 2 }}>
        <Typography
          component="span"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.3rem",
          }}
        >
          {Price.toFixed(2)}
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 1, sm: 1 }}>
        <IconButton>
          <DeleteIcon sx={{ minWidth: "0" }}></DeleteIcon>
        </IconButton>
      </Grid2>
    </Grid2>
    // </div>
  );
};
