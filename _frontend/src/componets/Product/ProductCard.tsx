import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "../../api";
import pillsThumbnail from "../../assets/pillsThumbnail.svg";

const thumbnail = pillsThumbnail;
interface ProductProps extends Product {
  onClick: (id: string) => void;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  // description,
  available, coverImageUrl,
  onClick,
}) => {
  return (
    <Card
      sx={{
          maxWidth: 345,
        margin: 2,
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          boxShadow: 3, // Add a shadow on hover for effect
        },
      }}
      onClick={() => onClick(id)}
    >
      <CardMedia
        component="img"
        height="140"
        image={coverImageUrl ? coverImageUrl : thumbnail}
        alt={name}
        sx={{ minWidth: "" }}
      />
      <CardContent sx={{ justifyItems: "end" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6">
          {available ? "Available" : "Unavailable"}
        </Typography>
        <Typography variant="h6">{price.toFixed(2)}₴</Typography>

        <Button
          variant="contained"
          color="primary" // Set to a valid color
          disabled={!available} // Disable button if not available
          sx={{ marginTop: 2, display: "inline-flex", minWidth: 0 }}
        >
          {available ? "Add to Cart  " : "Out of Stock  "}
          <AddShoppingCartIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;