import {
  Box,
  Button,
  Divider,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import palette from "theme/palette";

interface ITableToolBar {
  title: string;
  buttonText: string;
  handleClick?: () => void;
}

function TableToolBar(props: ITableToolBar) {
  const { title, buttonText, handleClick } = props;
  return (
    <Box {...props}>
      <Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            p: 1,
          }}
        >
          <Typography sx={{ m: 1, color: palette.text.secondary }} variant="h4">
            {title}
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button
              sx={{
                backgroundColor: palette.info.main,
              }}
              variant="contained"
              onClick={() => {
                handleClick?.();
              }}
            >
              <AddCircleIcon />
              <Typography
                component="span"
                sx={{ fontSize: "0.8rem", fontWeight: "500" }}
              >
                {buttonText}
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ maxWidth: 500, mt: 3, width: "100%", marginLeft: "auto" }}>
          <TextField
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Search Users..."
            variant="outlined"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default TableToolBar;
