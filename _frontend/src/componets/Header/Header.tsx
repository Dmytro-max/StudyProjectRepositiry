import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main.tsx";
import { observer } from "mobx-react-lite";

interface HeaderProps {
  MenuToggleActive: () => void;
}

const Header: React.FC<HeaderProps> = ({ MenuToggleActive }) => {
  const navigate = useNavigate();
  const { store } = useContext(Context);

  const mainClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation(); // Prevents the event from propagating to parent elements
    navigate(`/`);
  };

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const handleLogout = () => {
    store.logOut();
    navigate("/signin"); // Redirect to sign-in page after logging out
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section (Menu, Title, and Search Bar) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            minWidth: "1200px", // Ensures the Box stretches to at least 1200px
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={MenuToggleActive}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="a"
            sx={{ textDecoration: "none", cursor: "pointer", color: "white" }}
            onClick={(event) => mainClickHandler(event)}
          >
            Pharmall
          </Typography>
          <Search />
        </Box>

        {/* Right Section (Authentication) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {store.isAuth ? (
            <>
              <Typography color="inherit" sx={{ ml: 2 }}>
                {store.user.email}
              </Typography>
              <Button color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLoginClick} sx={{ ml: 2 }}>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default observer(Header);
