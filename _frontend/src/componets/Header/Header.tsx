import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  MenuToggleActive: () => void;
  OpenLoginWindow: (open: boolean) => void; // Function to open the login window with a boolean parameter to determine whether to open or close the window. This is a workaround to pass the open state to the LoginWindow component.  // In a real-world application, you would use a more robust method to handle window opening and closing. For example, you could use a modal or a dialog component.  // This function returns a function that takes a boolean
}

const Header: React.FC<HeaderProps> = ({
  MenuToggleActive,
  OpenLoginWindow,
}) => {
  const navigate = useNavigate();
  const mainClickHandler = () => {
    navigate(`/`);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={MenuToggleActive}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="a"
          sx={{ flexGrow: 1, textDecoration: "none" }}
          href=""
          color="white"
          onClick={mainClickHandler}
        >
          Pharmall
        </Typography>
        <Search />
        <Button
          color="inherit"
          sx={{ ml: 3, fontSize: "1.15rem" }}
          onClick={() => OpenLoginWindow(true)}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
// function useNavigate(): any {
//   throw new Error("Function not implemented.");
// }
