import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputProps,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import palette from "theme/palette";

type IOnSelect = (_: SelectChangeEvent) => void;

interface IOptios {
  value: string;
  id: number;
}

interface Props extends InputProps {
  style?: any;
  label?: string;
  helperText?: string;
  icon?: React.ReactElement;
  iconEnd?: boolean;
  onSelectHandler?: IOnSelect;
  selectValue?: string | number;
  menuItems?: IOptios[];
}

function Dropdown(props: Props) {
  const {
    name,
    label,
    onSelectHandler,
    style,
    helperText,
    selectValue,
    menuItems,
  } = props;

  return (
    <FormControl sx={style}>
      {label && (
        <FormLabel
          htmlFor={name}
          sx={{
            color: "inherit",
            fontSize: { xs: "1rem", xl: "1.3rem", fontWeight: "500" },
          }}
        >
          {label}
        </FormLabel>
      )}

      <Select
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        value={selectValue?.toString()}
        onChange={onSelectHandler}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuItems?.map((item) => {
          return (
            <MenuItem key={item.value} value={item.id}>
              {item.value}
            </MenuItem>
          );
        })}
      </Select>

      {helperText && (
        <FormHelperText id="my-helper-text" sx={{ color: palette.error.dark }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

Dropdown.defaultProps = {
  style: {
    width: "100%",
    marginBottom: "10px",
  },
  helperText: "",
};

export default Dropdown;
