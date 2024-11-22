import React, { useContext, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import { CreateProductDto, ProductCategory } from "./api";
import { Context } from "./main.tsx";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const AddProductForm: React.FC = () => {
  const [product, setProduct] = useState<CreateProductDto>({
    name: "",
    description: "",
    tradeMark: "",
    quantityInPackage: "",
    termsOfSale: "",
    countryOfOrigin: "",
    releaseForm: "",
    categoryId: "",
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const { store } = useContext(Context);
  const navigate = useNavigate();

  // Mock categories or fetch from API
  useEffect(() => {
    const fetchCategories = async () => {
      await store.getProductCategories(); // Assuming this fetches categories from an API
      setCategories(store.productCategories); // Assuming store.productCategories has the fetched categories
    };

    fetchCategories(); // Call the async function
  }, [store]);
  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle dropdown change
  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      categoryId: e.target.value as string,
    }));
  };

  // Handle image file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Добавити новий товар
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Full Width Description */}
          <Grid item xs={12}>
            <TextField
              label="Опис"
              name="description"
              value={product.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
          </Grid>

          {/* Column 1 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Назва"
              name="name"
              value={product.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Торгова марка"
              name="tradeMark"
              value={product.tradeMark}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Кількість в упаковці"
              name="quantityInPackage"
              value={product.quantityInPackage}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Країна виробник"
              name="countryOfOrigin"
              value={product.countryOfOrigin}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Умови продажу"
              name="termsOfSale"
              value={product.termsOfSale}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Форма випуску"
              name="releaseForm"
              value={product.releaseForm}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* Category Dropdown */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="category-label">Категорія</InputLabel>
              <Select
                labelId="category-label"
                value={product.categoryId}
                onChange={handleCategoryChange}
                required
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Image Upload */}
        <Box my={2}>
          <Button variant="contained" component="label">
            Завантажити знімок продукту
            <input type="file" hidden onChange={handleImageChange} />
          </Button>
          {coverImage && (
            <Typography variant="body2" color="textSecondary">
              {coverImage.name}
            </Typography>
          )}
        </Box>

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Зберегти
        </Button>
      </form>
    </Container>
  );
};

export default observer(AddProductForm);
