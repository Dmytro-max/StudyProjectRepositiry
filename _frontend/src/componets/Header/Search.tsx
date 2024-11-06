import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={[]}
      sx={{ MaxWidth: 300, minWidth: 200 }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search"
          type="search"
          // sx={{ MaxWidth: 300, minWidth: 200}}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
