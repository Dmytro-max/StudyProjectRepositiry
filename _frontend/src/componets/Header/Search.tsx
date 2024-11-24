import { useContext, useState } from "react";
import {
  Autocomplete,
  InputAdornment,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear"; // Importing ClearIcon
import { Context } from "../../main";

const Search = () => {
  const { store } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim().toLowerCase());
    const filteredProducts = store.products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery)
    );
    store.setFilteredProducts(filteredProducts);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchIconClick = () => {
    handleSearch();
  };

  const handleClearInput = () => {
    setSearchQuery("");
    store.setFilteredProducts(store.products); // Reset to all products
  };

  return (
    <Box sx={{ maxWidth: 500, minWidth: 200, width: "100%" }}>
      <Autocomplete
        freeSolo
        id="search-autocomplete"
        options={[]} // Add suggestions if needed
        disableClearable // Prevents the default browser clear button
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search"
            type="text" // Use 'text' instead of 'search' to prevent the default 'x'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {searchQuery && (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClearInput}
                        edge="end"
                        sx={{
                          cursor: "pointer",
                          color: "inherit", // Make sure it matches the icon style
                        }}
                      >
                        <ClearIcon sx={{ fontSize: "24px" }} />{" "}
                        {/* Custom x as ClearIcon */}
                      </IconButton>
                    </InputAdornment>
                  )}
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearchIconClick} edge="end">
                      <SearchIcon sx={{ fontSize: "24px" }} />{" "}
                      {/* Same size as ClearIcon */}
                    </IconButton>
                  </InputAdornment>
                </>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#f5f5f5",
                paddingRight: 1,
                height: 45,
              },
              "& .MuiOutlinedInput-root:hover": {
                backgroundColor: "#eaeaea",
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default Search;
