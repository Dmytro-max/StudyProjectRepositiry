import {Container, Box} from "@mui/material";
import Header from "./componets/Header/Header";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import ProductDetails from "./componets/Product/ProductDetails";
import Home from "./componets/Home";
import AddProductForm from "./AddProductForm";
import Login from './componets/Login/Login'
import SignUp from './componets/SignUp/SignUp'
import {SideMenu} from "./componets/SideMenu/SideMenu";
import {Context} from "./main.tsx";

function App() {
    const [isActive, setActive] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const {store} = useContext(Context)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, []);

    const MenuToggleActive = () => setActive(!isActive);

    return (
        <Router>
            <Header MenuToggleActive={MenuToggleActive} OpenLoginWindow={setLoginOpen}/>
            <Box sx={{display: "flex", height: "100vh"}}>
                {isActive && (
                    <Box
                        sx={{
                            width: {xs: "100%", sm: "240px"},
                            transition: "width 250ms",
                            borderRight: 1,
                            borderColor: "divider",
                        }}
                    >
                        <SideMenu/>
                    </Box>
                )}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "auto",
                    }}
                >
                    <Container sx={{p: 2}}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/product/:id" element={<ProductDetails/>}/>
                            <Route path="/create" element={<AddProductForm/>}/>
                            <Route path="/signin" element={<Login/>}/>
                            <Route path="/signup" element={<SignUp/>}/>
                        </Routes>
                    </Container>
                </Box>
            </Box>
        </Router>
    );
}

export default App;
