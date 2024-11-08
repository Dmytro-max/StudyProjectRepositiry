import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main.tsx";
import { observer } from "mobx-react-lite";

interface HeaderProps {
    MenuToggleActive: () => void;
    OpenLoginWindow: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ MenuToggleActive, OpenLoginWindow }) => {
    const navigate = useNavigate();
    const { store } = useContext(Context);

    const mainClickHandler = () => {
        navigate(`/`);
    };

    const handleLoginClick = () => {
        navigate('/signin');
    };

    const handleLogout = () => {
        store.logOut();
        navigate('/signin'); // Redirect to sign-in page after logging out
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
            </Toolbar>
        </AppBar>
    );
};

export default observer(Header);
