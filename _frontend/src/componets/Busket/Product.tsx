import {
  Button,
  Grid2,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import { Product } from "../../api/models/Product";
import classes from "./Product.module.css";
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
          sx={{ display: "flex", alignItems: "center", minWidth: "5rem" }}
        >
          <button className={classes.button}>-</button>
          <Typography
            component="a"
            id=""
            className={classes.quantity}
            // style={{ fontSize: "1.5rem", height: "2rem" }}
          >
            {quantity}
          </Typography>
          <button className={classes.button}>+</button>
        </Stack>
      </Grid2>
      {/* </div> */}
      <Grid2 size={{ xs: 2, sm: 2 }}>
        <Typography
          component="span"
          sx={{
            display: "flex",
            justifyContent: "center",
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
