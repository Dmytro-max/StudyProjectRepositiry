import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../../api";
import pillsThumbnail from "../../assets/pillsThumbnail.svg";

const thumbnail = pillsThumbnail;

interface ProductProps extends Product {
  onClick: (id: string) => void;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  coverImageUrl,
  tradeMark,
  category,
  quantityInPackage,
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
      />
      <CardContent
        sx={{ justifyItems: "end", display: "flex", flexDirection: "column" }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }} // Make product name bold
        >
          {name}
        </Typography>
        {/* Display the tradeMark */}
        {tradeMark && (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginBottom: 1 }}
          >
            Торгова марка: {tradeMark}
          </Typography>
        )}
        {/* Display the category name */}
        {category?.name && (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginBottom: 1 }}
          >
            Категорія: {category.name}
          </Typography>
        )}
        {/* Display the quantity in package */}
        {quantityInPackage && (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginBottom: 1 }}
          >
            Кількість в упаковці: {quantityInPackage}
          </Typography>
        )}
        {/* Placeholder for price range, bolded */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "auto" }}>
          12.50₴ - 44.20₴
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
