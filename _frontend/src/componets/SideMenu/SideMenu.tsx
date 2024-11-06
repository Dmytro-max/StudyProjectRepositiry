import { Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./SideMenu.css";

export const SideMenu = () => {
  // function ToggleMenu() {}

  return (
    <div
      className={"side-menu"}
      style={{
        minWidth: 0,
        // width: isActive ? "200px" : "0px",
        // transition: "50ms",
      }}
    >
      <Typography
        variant="h6"
        component="a"
        sx={{ flexGrow: 1, textDecoration: "none" }}
        href=""
        color="white"
      >
        Home
      </Typography>
      <Typography
        variant="h6"
        component="a"
        sx={{ flexGrow: 1, textDecoration: "none" }}
        href=""
        color="white"
      >
        Categories
      </Typography>
      <Typography
        variant="h6"
        component="a"
        sx={{ flexGrow: 1, textDecoration: "none" }}
        href=""
        color="white"
      >
        Busket <AddShoppingCartIcon />
      </Typography>
    </div>
  );
};
