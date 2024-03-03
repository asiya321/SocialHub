/* eslint-disable react/destructuring-assignment */
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, SvgIcon, TextField } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  placeholder?: string;
  iconColor?: any;
  iconSize?: "small" | "inherit" | "large" | "medium" | undefined;
}

function SearchBar(props: Props) {
  const { iconSize, iconColor } = props;
  return (
    <Box sx={{ maxWidth: 500, width: "100%" }}>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon color={iconColor || "action"} fontSize={iconSize}>
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        placeholder={props?.placeholder}
        variant="outlined"
      />
    </Box>
  );
}

export default SearchBar;
