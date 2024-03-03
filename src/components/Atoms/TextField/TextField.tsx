import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  InputProps,
  TextField as InputField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
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

const CustomField = styled(InputField)({});

function TextField(props: Props) {
  const {
    name,
    type,
    value,
    disabled,
    error,
    label,
    onChange,
    onBlur,
    placeholder,
    required,
    style,
    helperText,
    icon,
    iconEnd,
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

      <CustomField
        aria-describedby="my-helper-text"
        color="success"
        disabled={disabled}
        error={error}
        id={name}
        InputProps={{
          startAdornment: iconEnd ? null : (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
          endAdornment: iconEnd ? (
            <InputAdornment position="end">{icon}</InputAdornment>
          ) : null,
        }}
        name={name}
        placeholder={placeholder}
        required={required}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          fontSize: { xs: "1rem", xl: "1.3rem" },
        }}
        type={type}
        value={value}
        variant="outlined"
        onBlur={onBlur}
        onChange={onChange}
      />

      {helperText && (
        <FormHelperText id="my-helper-text" sx={{ color: palette.error.dark }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

TextField.defaultProps = {
  style: {
    width: "100%",
    marginBottom: "10px",
  },
  helperText: "",
};

export default TextField;
