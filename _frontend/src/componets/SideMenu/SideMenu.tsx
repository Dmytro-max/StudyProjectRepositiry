import { Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

import "./SideMenu.css";
import { useNavigate } from "react-router-dom";

export const SideMenu = () => {
  const navigate = useNavigate();

  const mainClickHandler = () => {
    navigate(`/`);
  };

  const buscketClickHandler = () => {
    navigate(`/busket`);
  };

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
        className="menu-item"
        sx={{
          flexGrow: 0,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
        href=""
        color="white"
        onClick={mainClickHandler}
      >
        Home
        <HomeIcon />
      </Typography>
      <Typography
        variant="h6"
        component="a"
        className="menu-item"
        sx={{ flexGrow: 0, textDecoration: "none" }}
        href=""
        color="white"
      >
        Categories
      </Typography>
      <Typography
        variant="h6"
        component="a"
        className="menu-item"
        sx={{ flexGrow: 0, textDecoration: "none" }}
        href=""
        color="white"
        onClick={buscketClickHandler}
      >
        Busket <AddShoppingCartIcon />
      </Typography>
    </div>
  );
};
