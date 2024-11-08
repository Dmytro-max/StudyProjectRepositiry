import React, {useContext, useState} from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    CircularProgress
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../../main.tsx";
import {observer} from "mobx-react-lite";


const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validateField = (name: string, value: string) => {
        switch (name) {
            case "firstName":
                return value.length >= 4 && value.length <= 32
                    ? ""
                    : "First name must be between 4 and 32 characters.";
            case "lastName":
                return value.length >= 4 && value.length <= 32
                    ? ""
                    : "Last name must be between 4 and 32 characters.";
            case "email":
                return validateEmail(value) ? "" : "Please enter a valid email address.";
            case "password":
                return value.length >= 8 && value.length <= 32
                    ? ""
                    : "Password must be between 8 and 32 characters.";
            default:
                return "";
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        }));

        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            await store.register(email, password, firstName, lastName);
            navigate("/");
        }
    };

    const validateForm = () => {
        return !Object.values(errors).some((error) => error) && firstName && lastName && email && password;
    };

    return (
        <Container maxWidth="xs">
            <Box
                component="form"
                onSubmit={handleSignUp}
                sx={{
                    mt: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5" sx={{mb: 2}}>
                    Sign Up
                </Typography>
                <TextField
                    label="First Name"
                    fullWidth
                    required
                    value={firstName}
                    onChange={handleChange}
                    name="firstName"
                    sx={{mb: 2}}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                />
                <TextField
                    label="Last Name"
                    fullWidth
                    required
                    value={lastName}
                    onChange={handleChange}
                    name="lastName"
                    sx={{mb: 2}}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                />
                <TextField
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                    value={email}
                    onChange={handleChange}
                    name="email"
                    sx={{mb: 2}}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    value={password}
                    onChange={handleChange}
                    name="password"
                    sx={{mb: 2}}
                    error={!!errors.password}
                    helperText={errors.password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 1, mb: 2}}
                    disabled={!validateForm() || store.isLoading}  // Disable button when form is invalid or loading
                >
                    {store.isLoading ? (
                        <CircularProgress size={24} color="inherit"/>  // Show spinner when loading
                    ) : (
                        "Sign Up"
                    )}
                </Button>

                <Typography variant="body2">
                    Already have an account?{" "}
                    <Link to="/signin" style={{textDecoration: 'none', color: '#1976d2'}}>
                        Sign In
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default observer(SignUp);
