import React, {useContext, useState} from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Link as MuiLink,
    CircularProgress
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../../main.tsx";
import {observer} from "mobx-react-lite";

const Login: React.FC = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validatePassword = (password: string) => {
        return password.length >= 4 && password.length <= 32;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (name === "email") {
            setEmail(value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: validateEmail(value) ? "" : "Please enter a valid email address.",
            }));
        } else if (name === "password") {
            setPassword(value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: validatePassword(value) ? "" : "Password must be between 4 and 32 characters.",
            }));
        }
    };

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateEmail(email) && validatePassword(password)) {
            await store.login(email, password);
            navigate("/");
        } else {
            console.log("Invalid form submission");
        }
    };

    const isFormValid = validateEmail(email) && validatePassword(password);

    return (
        <Container maxWidth="xs">
            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    mt: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5" sx={{mb: 2}}>
                    Sign In
                </Typography>
                <TextField
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                    name="email"
                    value={email}
                    onChange={handleChange}
                    sx={{mb: 2}}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    name="password"
                    value={password}
                    onChange={handleChange}
                    sx={{mb: 2}}
                    error={!!errors.password}
                    helperText={errors.password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 1, mb: 2}}
                    disabled={!isFormValid || store.isLoading}  // Disable button if form is invalid or loading
                >
                    {store.isLoading ? (
                        <CircularProgress size={24} color="inherit"/>  // Show spinner when loading
                    ) : (
                        "Sign In"
                    )}
                </Button>

                <Typography variant="body2">
                    Don’t have an account?{" "}
                    <MuiLink component={Link} to="/signup" underline="hover">
                        Sign Up
                    </MuiLink>
                </Typography>
            </Box>
        </Container>
    );
};

export default observer(Login);
