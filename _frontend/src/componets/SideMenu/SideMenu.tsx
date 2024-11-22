import React, { useContext, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import { Context } from "../../main.tsx";
import { Link } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";

// Define a mapping of category names to icon file paths
const categoryIcons: { [key: string]: string } = {
  "Ліки та профілактичні засоби": "category1.png",
  "Вітаміни та мінерали": "category2.png",
  "Краса та догляд": "category3.png",
  "Спорт та здоров'я": "category4.png",
  "Товари для дітей та мам": "category5.png",
  "Вироби медичного призначення": "category6.png",
  "Ортопедія та реабілітація": "category7.png",
  "Медична техніка": "category8.png",
  Зоотовари: "category9.png",
};

const categories = Object.keys(categoryIcons); // Using keys of the categoryIcons as categories

export const SideMenu: React.FC = () => {
  const { store } = useContext(Context);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category); // Set active category in state
    store.filterProductsByCategory(category); // Call store method to filter products
  };

  // Clear category selection
  const handleClearCategory = () => {
    setActiveCategory(null); // Reset active category
    store.clearCategoryFilter(); // Call store method to clear product filter
  };

  return (
    <Box
      sx={{
        overflowY: "auto",
        height: "100%",
        boxShadow: "4px 0 10px rgba(25, 118, 210, 0.3)", // Blue shadow with slight transparency
        borderRadius: 2, // Optional: rounded corners
        paddingTop: 4, // Adds padding from top to separate from the header
        paddingX: 2, // Add horizontal padding to avoid touching sides
        position: "sticky", // Keeps the side menu fixed in place
        top: 0, // Fixes the top position of the side menu
      }}
    >
      {/* Active Category Display */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          {activeCategory
            ? `Активна категорія: ${activeCategory}`
            : "Виберіть категорію"}
        </Typography>
        {activeCategory && (
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClearCategory}
            sx={{ marginTop: 1 }}
          >
            Очистити вибір
          </Button>
        )}
      </Box>

      {/* Categories List */}
      <List>
        {categories.map((category, index) => (
          <div key={index}>
            <ListItem
              button
              onClick={() => handleCategoryClick(category)}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer", // Make the item clickable
                paddingY: 1, // Vertical padding for each item
                backgroundColor:
                  activeCategory === category
                    ? "rgba(25, 118, 210, 0.1)"
                    : "transparent", // Highlight active category
                "&:hover": {
                  backgroundColor:
                    activeCategory === category
                      ? "rgba(25, 118, 210, 0.2)"
                      : "rgba(25, 118, 210, 0.1)", // Lighter blue for hover
                },
              }}
              component="li" // Ensure ListItem renders as a list item
            >
              <img
                src={`src/assets/categories-icons/${categoryIcons[category]}`} // Dynamically load the icon
                alt={category}
                style={{
                  width: 32, // Bigger icon size
                  height: 32,
                  marginRight: 16, // Add spacing between icon and text
                }}
              />
              <ListItemText
                primary={category}
                sx={{
                  color: "text.primary",
                  fontWeight: "bold", // Make text bold
                  fontSize: "1.1rem", // Increase text size
                }}
              />
            </ListItem>
            {index < categories.length - 1 && <Divider />}{" "}
            {/* Divider between items */}
          </div>
        ))}
      </List>

      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Link
          to="/pharmacy-map"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<MapIcon />}
            sx={{
              width: "100%", // Make button full width
              backgroundColor: "#90caf9", // Light blue color
              "&:hover": {
                backgroundColor: "#64b5f6", // Slightly darker blue on hover
              },
            }}
          >
            Карта аптек
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
