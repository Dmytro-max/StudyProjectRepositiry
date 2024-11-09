import React, {useContext, useState} from "react";
import {
    TextField,
    Button,
    Container,
    Checkbox,
    FormControlLabel,
    Typography,
    Box,
} from "@mui/material";
import {CreateProductDto} from "./api";
import {Context} from "./main.tsx";
import {useNavigate} from "react-router-dom";

const AddProductForm: React.FC = () => {
    // Form state
    const [product, setProduct] = useState<CreateProductDto>({
        name: "",
        price: 0,
        description: "",
        available: true,
    });

    const [coverImage, setCoverImage] = useState<File | null>(null);
    const {store} = useContext(Context)
    const navigate = useNavigate()

    // Handle form field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle image file change
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            //   setProduct((prevProduct) => ({
            //     ...prevProduct,
            //     coverImage: e.target.files[0], // Set the selected image
            //   }));
            console.log(e.target.files[0]);
            setCoverImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (product.price < 0) {
            alert("Price cannot be negative");
            return;
        }
        console.log("Product to submit: ", product);
        if (coverImage) {
            product.cover = coverImage;
        }
        const newProduct = await store.addProduct(product);
        if (newProduct) {
            navigate(`product/${newProduct.id}`);
        }
    };

    return (
        <Container maxWidth="sm" sx={{mt: 3, maxHeight: "100%"}}>
            <Typography variant="h4" gutterBottom>
                Add New Product
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Product Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    label="Price"
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    label="Description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={8}
                    required
                    sx={{
                        maxHeight: "100%",
                        fontSize: "16px",
                        lineHeight: "16px",
                        overflow: "hidden",
                        height: "fit-content",
                    }}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            name="available"
                            checked={product.available}
                            onChange={handleChange}
                        />
                    }
                    label="Available"
                />

                {/* Image upload mock */}
                <Box my={2}>
                    <Button variant="contained" component="label">
                        Upload Cover Image
                        <input type="file" hidden onChange={handleImageChange}/>
                    </Button>
                    {coverImage && (
                        <Typography variant="body2" color="textSecondary">
                            {coverImage.name}
                        </Typography>
                    )}
                </Box>

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Add Product
                </Button>
            </form>
        </Container>
    );
};

export default AddProductForm;
